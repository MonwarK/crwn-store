import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from "../components/button.component";

function ContactPage() {
  const [state, handleSubmit] = useForm("moqrlgjw");

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-medium'>Contact</h1>
      <form className='my-5' onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <div className='mb-5 mt-2'>
          <input
            className="w-full p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-100 duration-200"
            id="email"
            type="email"
            name="email"
          />
          <p className='text-red-600'>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </p>
        </div>
        <label htmlFor="message">
          Message
        </label>
        <div className='mb-5 mt-2'>
          <textarea
            className="w-full p-2 rounded-md h-64 outline-none focus:ring-2 focus:ring-blue-100 duration-200"
            id="message"
            name="message"
          />
          <p className='text-red-600'>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </p>
        </div>
        {state.succeeded && <p className='text-green-500 mb-5'>Successfully submitted form.</p>}
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactPage