import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const secretKey = process.env.REACT_APP_STRIPE_SECRET_KEY;
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      ComponentClass="bg-gray-500"
    />
  )
}

export default StripeCheckoutButton