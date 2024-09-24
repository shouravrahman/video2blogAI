export const plans = [
   {  id:"basic",
      name: 'Basic',
      price: '$20',
      features: ['3 video conversions/month', 'Basic blog formatting'],
      buttonText: 'Get Started',
      paymentLink: "https://buy.stripe.com/test_6oEdS90oS5PmfUkdQQ",
      priceId: process.env.NODE_ENV === "development" ? "price_1Q2J0uAzvLqpgBepOrqLBlbk" : ""
   },
   {
      id:"pro",
      name: 'Pro',
      price: '$35',
      features: ['Unlimited conversions', 'Advanced SEO optimization', 'Priority support'],
      buttonText: 'Subscribe',
      paymentLink: "https://buy.stripe.com/test_28o15n5Jc4LiaA0aEF",
      priceId: process.env.NODE_ENV === "development" ? "price_1Q2JF9AzvLqpgBepjjRSef1r" : ""
   },

];
