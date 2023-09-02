import React from 'react'
import classes from './Button-Primary.module.css'

const ButtonPrimary = () => {
  return (
    <button className={classes['greenButton']}>
    <span>Order Now</span>
  </button>
  )
}

export default ButtonPrimary