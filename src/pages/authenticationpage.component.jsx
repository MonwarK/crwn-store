import React from 'react'
import SignInForm from '../components/sign-in-form.component'

function AuthenticationPage() {
  return (
    <div className='grid grid-col-1 gap-5 lg:grid-cols-2'>
      <SignInForm />
    </div>
  )
}

export default AuthenticationPage