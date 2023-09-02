import React from 'react'
import classes from './OrderButton.module.css'

const OrderButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.orderButton}>
    <span>Add to Cart</span>
  </button>
  )
}

export default OrderButton