import React from 'react'

const SignUpForm = () => {
  return (
      <div>
          <h1>Sign Up With Your Email And Password</h1>
          <form>
              <label>Display Name</label>
              <input type='text' required />

              <label>Email</label>
              <input type='email' required />

              <label>Password</label>
              <input type='password' required />
              
              <label>Confirm Password</label>
              <input type='submit' required />

            </form> 

    </div>
  )
}

export default SignUpForm