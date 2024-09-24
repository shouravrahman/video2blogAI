import {
	handleCheckoutSessionCompleted,
	handleSubscriptionDeleted,
} from "@/lib/payment-helper";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY!);
export async function POST(req: NextRequest) {
	const payload = await req.text();
	const sig = req.headers.get("stripe-signature");

	let event;

	try {
		event = stripe.webhooks.constructEvent(
			payload,
			sig!,
			process.env.STRIPE_WEBHOOK_KEY!
		);

		switch (event.type) {
			case "checkout.session.completed":
				const session = await stripe.checkout.sessions.retrieve(
					event.data.object.id,
					{ expand: ["line_items"] }
				);
				// connect to db
				await handleCheckoutSessionCompleted({ session, stripe });
				console.log({ session });
				break;
			case "customer.subscription.deleted":
				const subscriptionId = event.data.object.id;
				const subscription = await stripe.subscriptions.retrieve(
					subscriptionId
				);
				// connect to db
				await handleSubscriptionDeleted({ subscriptionId, stripe });
				// update the user
				break;

			default:
				console.log(`Unhandled event type ${event.type}`);
		}
	} catch (err) {
		return NextResponse.json({
			success: false,
			err,
		});
	}
	return NextResponse.json({
		success: true,
	});
}
