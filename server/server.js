const express = require('express');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())


// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
    let sum = 0;
    for(const item of items) {
        sum += item.price
    }
    return sum*100;
};
  
app.post('/create-payment-intent', async (req, res) => {
    // middleware checks to validate the request from your product
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
    //   payment_method_types : ["card"]
    automatic_payment_methods: {
        enabled: true,
      },
        });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
});

app.listen(3000, () => console.log('Running on port 3000'));