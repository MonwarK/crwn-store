import React from 'react'
import { useRecoilState } from 'recoil'
import { cartAtom } from '../atoms/cart.atom';
import Button from './button.component'

function CollectionItem({title, price, imageUrl}) {
  const [cart, setCart] = useRecoilState(cartAtom);

  const addToCart = () => {
    const exists = cart.findIndex(x => x.title === title);

    if (exists >= 0) {
      setCart(cart.map((item, i) => (
        i === exists ? ({
          title,
          price,
          imageUrl,
          quantity: parseInt(item.quantity) + 1
        }) : item
      )))
    } else {
      setCart([...cart, { title, price, imageUrl, quantity: 1 }])
    }
  }
  
  return (
    <div className='cursor-pointer'>
      <div className='w-full h-80 relative group'>
        <img
          className='w-full h-full object-cover'
          src={imageUrl}
          alt={title}
        />
        <div className='absolute bottom-3 left-0 right-0 hidden group-hover:block duration-200 m-auto w-full px-5'>
          <button 
            onClick={addToCart}
            className='w-full text-white text-lg bg-gray-800 border-2 hover:border-gray-800 hover:bg-white hover:bg-opacity-75 duration-300 font-medium hover:text-black py-3 uppercase'
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className='flex text-lg my-2 justify-between'>
        <p>{title}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default CollectionItem