import React from 'react'
import './button.style.scss';

// default - inverted - google Sign in

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}


const Button = ({children, buttonType, ...otherProps}) => {
  return (
      <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} >
          {children}
    </button>
  )
}

export default Button