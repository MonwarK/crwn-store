import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, signInWithGoogle } from '../utilities/firebase.utils'
import Button from './button.component'
import FormInput from './form-input.component'

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch((err) => console.log(err))
  }

  const loginGoogle = () => {
    signInWithGoogle()
      .then(() => navigate("/"))
  }

  return (
    <form className='max-w-lg mx-auto w-full' onSubmit={(e) => e.preventDefault()}>
      <h1 className='text-3xl font-medium'>I already have an account</h1>
      <p className='text-lg my-5'>Sign in with your email and password</p>
      <FormInput 
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <FormInput 
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <div className='space-x-5 flex'>
        <div className='w-fit'>
          <Button onClick={login}>
            Sign In
          </Button>
        </div>
        <div className='w-fit'>
          <Button 
            onClick={loginGoogle}
            color="secondary"
          >
            Sign In With Google
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SignInForm