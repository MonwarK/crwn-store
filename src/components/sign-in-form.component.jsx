import React from 'react'
import { signInWithGoogle } from '../utilities/firebase.utils'
import Button from './button.component'
import FormInput from './form-input.component'

function SignInForm() {
  return (
    <div>
      <h1 className='text-3xl font-medium'>I already have an account</h1>
      <p className='text-lg my-5'>Sign in with your email and password</p>
      <FormInput 
        type="email"
        placeholder="email"
      />
      <FormInput 
        type="password"
        placeholder="password"
      />
      <div className='space-x-5'>
        <Button>
          Sign In
        </Button>
        <Button 
          onClick={signInWithGoogle}
          type="secondary"
        >
          Sign In With Google
        </Button>
      </div>
    </div>
  )
}

export default SignInForm