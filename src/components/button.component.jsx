import React from 'react'

function Button({ type="primary", children, ...props }) {
  const theme = {
    primary: "bg-gray-900 hover:bg-gray-700 text-white",
    secondary: "bg-blue-600 hover:bg-blue-500"
  }

  return (
    <button 
      className={`${theme[type]} text-white duration-200 px-5 py-3 uppercase w-full`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button