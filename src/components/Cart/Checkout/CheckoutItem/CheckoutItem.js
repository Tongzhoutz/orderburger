import React from 'react'
import Counter from '../../../../UI/Counter/Counter';
import classes from './CheckoutItem.module.scss';

const CheckoutItem = (props) => {
  return (
    <div className={classes.main}>
      <img src={props.meal.img} alt="" />
      
      <div className={classes.itemDesc}>
       <h2>{props.meal.title}</h2>
       <div className={classes.priceOuter}>
        <Counter meal={props.meal} />
        <div className={classes.price}>{props.meal.price * props.meal.amount}</div>
        </div>
      </div>

    </div>
  )
}

export default CheckoutItem
