import React from 'react'

function MenuItem({ title, image, size }) {
  return (
    <div className={`${size === "large" ? "md:w-1/2" : "md:w-1/3"} w-full duration-500 h-80 p-2`}>      
      <div className="w-full h-full grid place-items-center shadow-lg border relative cursor-pointer group hover:z-10 overflow-hidden">
        <img 
          className='w-full h-full absolute z-0 brightness-75 object-cover group-hover:scale-110 duration-700'
          src={image} 
          alt={title} 
        />
        <div className='z-10 relative uppercase border border-gray-800 bg-white text-gray-600 bg-opacity-80 group-hover:bg-opacity-95 duration-200 grid place-items-center py-5 px-10'>
          <h2 className='text-2xl font-medium'>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    </div>
  )
}

export default MenuItem