import { signOut } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/crown.svg";
import { auth } from '../utilities/firebase.utils';
import { ShoppingBagIcon } from "@heroicons/react/outline"
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartAtom, cartHiddenAtom } from '../atoms/cart.atom';

function Header({ user }) {
  const cart = useRecoilValue(cartAtom);
  const [isHidden, setIsHidden] = useRecoilState(cartHiddenAtom)

  return (
    <header className='mb-5 flex items-center justify-between uppercase px-10 py-5 shadow-lg bg-white'>
      <Link to="/">
        <Logo className='hover:animate-pulse' />
      </Link>

      <div className='flex items-center space-x-5'>
        <Link className='hover:underline' to="/shop">
          Shop
        </Link>
        <Link className='hover:underline' to="/contact">
          Contact
        </Link>
        {user ? (
          <div onClick={() => signOut(auth)} className='cursor-pointer hover:underline'>
            Sign Out
          </div>
        ) : (
          <Link className='hover:underline' to="/signin">
            Sign In
          </Link>
        )}
        <div onClick={() => setIsHidden(!isHidden)} className='relative cursor-pointer'>
          <ShoppingBagIcon height={25} />
          <div className='absolute top-3 left-3 m-auto w-4 h-4 text-xs font-medium text-white bg-red-500 rounded-full grid place-content-center'>
            {cart.length}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header