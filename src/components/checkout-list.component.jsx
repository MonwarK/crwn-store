import React, { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "@heroicons/react/solid";
import StripeCheckoutButton from './stripe-checkout-button.component';

function CheckoutList() {
  const { 
    cart, 
    removeItem, 
    increaseQuantity, 
    decreaseQuantity,
    totalPrice
  } = useContext(CartContext);

  return (
    <div>
      <div className='grid grid-cols-5 text-center text-sm md:text-lg py-5 border-b'>
        <h2>Product</h2>
        <h2>Descriptions</h2>
        <h2>Quantity</h2>
        <h2>Price</h2>
        <h2>Remove</h2>
      </div>
      {cart.map(item => (
        <div className='grid grid-cols-5 items-center text-center text-lg py-5 border-b'>
          <div>
            <img 
              className='w-28 h-28 object-cover mx-auto rounded-md'
              src={item.imageUrl} 
              alt={item.title} 
            />
          </div>
          <div>
            {item.title}
          </div>
          <div className='flex justify-center items-center'>
            <ChevronLeftIcon 
              className='cursor-pointer h-5'
              onClick={() => decreaseQuantity(item)}
            />
            <p className='mx-2 text-lg my-0'>{item.quantity}</p>
            <ChevronRightIcon 
              className='cursor-pointer h-5'
              onClick={() => increaseQuantity(item)}
            />
          </div>
          <div>
            ${item.price}.00
          </div>
          <div>
            <XIcon
              onClick={() => removeItem(item.title)} 
              className='cursor-pointer h-5 mx-auto text-gray-400'
            />
          </div>
        </div>
      ))}
      <div className='grid grid-cols-2 items-center md:text-xl'>
        <div className='text-red-600'>
          <p>*Please use the following test credit card for payments*</p>
          <p>4242 4242 4242 4242 - Exp: 4/24 - CW: 424</p>
        </div>
        <p className='text-right'>Total: ${totalPrice}</p>
      </div>
      <div className='w-fit ml-auto mt-5'>
        <StripeCheckoutButton price={totalPrice} />
      </div>
    </div>
  )
}

export default CheckoutList