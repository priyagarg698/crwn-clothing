import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KTRFeSJ6TlYQSShhX1MYsU5OfqYgfq9Tz2oZj3nv3d9kd5rDvyhzRtXs2QzlLAWFlFBSBxcsQv6npxSZIUJmSCR00rVju3xOf';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return(
        <StripeCheckout label="Pay Now" name="CRWN Clothing Ltd." billingAddress shippingAddress
        image="https://svgshare.com/i/CUz.svg" description={`Your total is $${price}`}
        amount={priceForStripe} panelLabel="Pay Now" token={onToken} stripeKey={publishableKey}></StripeCheckout>
    )
}

export default StripeCheckoutButton;