import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/cart.context';

function CollectionItem(product) {
  const {title, price, imageUrl} = product;
  const { addToCart } = useContext(CartContext);
  
  return (
    <div className='cursor-pointer'>
      <div className='w-full h-[500px] relative group'>
        <img
          className='w-full h-full object-cover'
          src={imageUrl}
          alt={title}
        />
        <div className='absolute bottom-3 left-0 right-0 hidden group-hover:block duration-200 m-auto w-full px-5'>
          <button 
            onClick={() => addToCart(product)}
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