import React from 'react'

function MenuItem({ title, image, size }) {
  return (
    <div className={`${size === "large" ? "md:w-1/2" : "md:w-1/3"} w-full h-80 grid place-items-center relative hover:scale-105 hover:z-10 duration-200 cursor-pointer p-2`}>
      <img 
        className='w-full h-full p-2 absolute z-0 brightness-75 object-cover'
        src={image} 
        alt={title} 
      />
      <div className='z-10 relative uppercase bg-white text-gray-600 bg-opacity-80 grid place-items-center border py-5 px-10'>
        <h2 className='text-xl font-medium'>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default MenuItem