import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../atoms/cart.atom'
import CartItem from './cart-item.component'

function CartDropDown() {
  const cart = useRecoilValue(cartAtom);

  return (
    <div className='absolute top-14 right-5 z-20 h-72 shadow-lg border rounded-lg bg-white w-full max-w-xs p-4 overflow-y-auto'>
      <h2 className='text-2xl font-medium px-8'>Cart</h2>
      <div className='h-fit'>
        {cart.map((item, i) => (
          <CartItem 
            key={i}
            title={item.title} 
            imageUrl={item.imageUrl}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  )
}

export default CartDropDown