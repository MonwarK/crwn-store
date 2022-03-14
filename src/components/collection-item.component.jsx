import React from 'react'

function CollectionItem({title, price, imageUrl}) {
  return (
    <div className='cursor-pointer'>
      <img
        className='w-full h-80 object-cover'
        src={imageUrl}
        alt={title}
      />
      <div className='flex text-lg my-2 justify-between'>
        <p>{title}</p>
        <p>${price}</p>
      </div>
    </div>
  )
}

export default CollectionItem