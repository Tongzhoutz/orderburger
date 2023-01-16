import React from 'react'
import { Button } from 'antd-mobile';
import classes from './Bar.module.scss';

const Bar = (props) => {
  return (
    <div className={classes.bar}>
      <div className={classes.totalPrice}>{props.totalPrice}</div>
      <Button block shape='rounded' className={classes.btn}>Pay</Button>
    </div>
  )
}

export default Bar
