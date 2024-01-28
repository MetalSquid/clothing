import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      resetFormFields();
    } catch (error) {

    }
  };
  // confirm password matches
  // see if authenticate with email and password

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value })
  };

  return (
    <div className='sign-in-container'>
      <h2>Have an account?</h2>
      <span>Sign In With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        
        
        <FormInput
          type='email'
          label='Email'
          required
          onChange={handleChange}
          name='email'
          value={email} />

       
        <FormInput
          type='password'
          label='Password'
          required
          onChange={handleChange}
          name='password'
          value={password} />
       <div className='buttons-container'> 
        <Button type='submit'>Sign In</Button>
        <Button buttonType='google' onclick={signInWithGoogle} >Google Sign In</Button >
        </div>
      </form>

    </div>
  )
}

export default SignInForm;