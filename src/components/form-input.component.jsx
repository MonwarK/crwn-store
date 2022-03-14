import React from 'react'

function FormInput({ ...props }) {
  return (
    <input
      className='border-0 border-b border-gray-700 bg-transparent px-1 py-4 w-full mb-5 outline-none'
      {...props}
    />
  )
}

export default FormInput