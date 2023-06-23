# Simple Stripe Integration

Stripe Test Documentation can be found at : [https://stripe.com/docs/checkout/quickstart](https://stripe.com/docs/checkout/quickstart)

This code implementation follows the tab : `Custom payment flow`

## Main Differences

 - Stripe example assumes all the code (`server` and `client` in one folder). This code implementation has two independent folders `client` (created by `vite`) and `server` (simple `express` based nodejs folder)
 - Therefore, related URLs, `cors` settings are in place

