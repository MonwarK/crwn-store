import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth } from '../utilities/firebase.utils';
import Button from './button.component'
import FormInput from './form-input.component'
import { useNavigate  } from "react-router-dom";

function SignUpForm() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const signUp = () => {
    if (!displayName) return;
    if (!email) return;
    if (!password) return;
    if (!confirmPassword) return;
    if(password !== confirmPassword) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch((err) => console.log(err))
          
  }

  return (
    <form className='max-w-lg mx-auto w-full' onSubmit={(e) => e.preventDefault()}>
      <h1 className='text-3xl font-medium'>I do not have an account</h1>
      <p className='text-lg my-5'>Sign up with your email and password</p>
      <FormInput 
        onChange={(e) => setDisplayName(e.target.value)}
        type="text"
        placeholder="Display name"
        value={displayName}
      />
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
      <FormInput 
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
      />
      <div className='w-fit'>
        <Button onClick={signUp}>
          Register
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm