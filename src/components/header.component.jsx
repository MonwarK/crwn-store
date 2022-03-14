import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/crown.svg";


function Header() {
  return (
    <header className='mb-5 flex items-center justify-between uppercase px-10 py-5 shadow-lg bg-white'>
      <Link to="/">
        <Logo />
      </Link>

      <div className='flex items-center space-x-5 text-xl'>
        <Link className='hover:underline' to="/shop">
          Shop
        </Link>
        <Link className='hover:underline' to="/contact">
          Contact
        </Link>
      </div>
    </header>
  )
}

export default Header