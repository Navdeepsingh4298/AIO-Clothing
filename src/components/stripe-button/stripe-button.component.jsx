import React from 'react';

// For stripe
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HtBA3EVTv42fxR0yabMkv2l6aRWAQNt3L8U67uYXkDvqFIrY3fFVjRUnZFaEwIcy9TLkX9HpwDhJNozsuUKkHw700S0Xt27dn';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='AIO Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Rtp.svg'
      description={`Your Total Amount is ₹${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      currency="INR"
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;