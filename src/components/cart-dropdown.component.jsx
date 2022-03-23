import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil'
import { cartAtom } from '../atoms/cart.atom'
import Button from './button.component';
import CartItem from './cart-item.component'

function CartDropDown() {
  const cart = useRecoilValue(cartAtom);
  const navigate = useNavigate();

  return (
    <div className='absolute top-14 right-5 z-20 h-72 shadow-lg border rounded-lg bg-white w-full max-w-xs p-4 overflow-y-auto flex flex-col'>
      <h2 className='text-2xl font-medium px-8'>Cart</h2>
      <div className='h-fit flex-1 my-2'>
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
      {cart.length > 0 && (
        <Button onClick={() => navigate("/checkout")}>
          Go to Checkout
        </Button>
      )}
    </div>
  )
}

export default CartDropDown