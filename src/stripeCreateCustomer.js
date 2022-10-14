import Stripe from "stripe" 
import mondayCustomer from "./getMondayCustomer.js";

const stripe = new Stripe ('sk_test_clhyYvJVSN54oRZSVhdQwTed00KmJbCHy0', {

})

const customer = await stripe.customers.create({
    name: 'Paul Krisman',
    email: 'paul@krisman.net',
    description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
});

function checkCustomer (invId) {
        mondayCustomer.mondayCustomerItem (invId, (data) => {
            console.log(data)
    })
}

export default {
    checkCustomer
}
