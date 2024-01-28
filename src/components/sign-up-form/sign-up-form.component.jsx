import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password);
      
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields();
    } catch (error) {
      console.log('user encountered an error', error)
      if (error.code == 'auth/email-already-in-use');
      { alert('cannot create user, email already in use') };
    }
  };
  // confirm password matches
  // see if authenticate with email and password

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value })
  };

  return (
    <div>
      <h2>Don't have an account?</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
          type='text'
          label='Display Name'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName} />

        
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

        
        <FormInput
          type='password'
          label='Confirm Password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword} />
        
        <button type='submit'>Sign Up</button>

      </form>

    </div>
  )
}

export default SignUpForm;