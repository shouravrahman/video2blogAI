import Stripe from "stripe";
import { getDbConnection } from "./db";

export async function handleCheckoutSessionCompleted({
	session,
	stripe,
}: {
	session: Stripe.Checkout.Session;
	stripe: Stripe;
}) {
	const sql = await getDbConnection();
	const customerId = session.customer as string;
	const customer = await stripe.customers.retrieve(customerId);
	const priceId = session.line_items?.data[0].price?.id;
	if ("email" in customer && priceId) {
		await createOrUpdateUser(customer, customerId, sql);
		//update subscription
		await updateSubscription(sql, priceId, customer.email as string);
		//insert the payment
		await insertPayment(sql, session, customer.email as string, priceId);
	}
}

async function createOrUpdateUser(
	customer: Stripe.Customer,
	customerId: string,
	sql: any
) {
	try {
		const user =
			await sql`SELECT * FROM users WHERE email = ${customer.email}`;
		if (user.length === 0) {
			await sql`INSERT INTO users (email,full_name,customer_id) VALUES (${customer.email},${customer.name},${customerId})`;
		}
	} catch (error) {
		console.log("Error inserting user", error);
	}
}
async function updateSubscription(sql: any, priceId: string, email: string) {
	try {
		await sql`UPDATE users SET price_id=${priceId}, status = 'active' WHERE email = ${email}`;
	} catch (error) {
		console.log("Error updating user", error);
	}
}
async function insertPayment(
	sql: any,
	session: Stripe.Checkout.Session,
	customerEmail: string,
	priceId: string
) {
	try {
		await sql`INSERT INTO payments (amount,status,stripe_payment_id,user_email,price_id) VALUES (${session.amount_total},${session.status},${session.id},${customerEmail},${priceId})`;
	} catch (error) {}
}

export async function handleSubscriptionDeleted({
	subscriptionId,
	stripe,
}: {
	subscriptionId: string;
	stripe: Stripe;
}) {
	try {
		const subscription = await stripe.subscriptions.retrieve(
			subscriptionId
		);
		const sql = await getDbConnection();
		await sql`UPDATE users SET status = 'cancelled' WHERE customer_id = ${subscription.customer} `;
	} catch (error) {
		console.log("error handling subscription deletion", error);
		throw Error;
	}
}
