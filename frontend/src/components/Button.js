import React from 'react'
import button from './Button.module.css'

const Button = ({onClick, children}) => {
  return <button className={button.button} onClick={onClick}>{children}</button>
}

export default Button