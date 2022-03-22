import { TrashIcon } from '@heroicons/react/outline'
import React from 'react'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../atoms/cart.atom'

function CartItem({ title, price, imageUrl, quantity }) {
  const [cart, setCart] = useRecoilState(cartAtom)
  
  const removeItem = () => {
    setCart(
      cart.filter(x => x.title !== title)
    )
  }

  return (
    <div className='py-2 flex items-center'>
    <div className='flex items-center'>
      <p className='text-xl w-5'>{quantity}x</p>
      <img
        className='h-12 w-12 object-cover bg-black ml-3'   
        src={imageUrl}
        alt={title}
      />
    </div>
      <div className='flex-1 px-2'>
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <TrashIcon 
        onClick={removeItem}
        className='cursor-pointer' 
        height={20} 
      />
    </div>
  )
}

export default CartItem