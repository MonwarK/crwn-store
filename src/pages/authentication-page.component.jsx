import React from 'react'
import SignInForm from '../components/sign-in-form.component'
import SignUpForm from '../components/sign-up-form.component'

function AuthenticationPage() {
  return (
    <div className='grid grid-col-1 gap-5 lg:grid-cols-2 max-w-7xl mx-auto'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default AuthenticationPage