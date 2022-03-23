import React from 'react'
import { useContext } from 'react';
import CheckoutList from '../components/checkout-list.component'
import { CartContext } from '../context/cart.context';

function CheckoutPage() {
  const { cart } = useContext(CartContext);

  return (
    <div className='mx-auto max-w-5xl'>
      <h1 className='text-3xl mb-10'>Checkout</h1>
      {cart.length > 0 ? (
        <CheckoutList />
      ) : (
        <h2>No items added to checkout</h2>
      )}
    </div>
  )
}

export default CheckoutPage