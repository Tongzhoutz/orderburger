import React, { useContext } from 'react'
import classes from './Counter.module.scss';
import { AddCircleOutline, MinusCircleOutline } from 'antd-mobile-icons';
import cartContext from '../../store/cart-context';

const Counter = (props) => {

    const cartCTX = useContext(cartContext);
    const addMealHandler = () => {
        cartCTX.addItem(props.meal);
    }
    const subMealHandler = () =>  {
        cartCTX.removeItem(props.meal);
    }
  return (
            <div>
                        {
                            (props.meal.amount && props.mealamount !== 0) ? (
                                <>
                                    <MinusCircleOutline onClick={subMealHandler} className={classes.subtract}/>
                                    <span className={classes.amount}>{props.meal.amount}</span>
                                </>
                            ) : null
                        }
                        <AddCircleOutline onClick={addMealHandler} className={classes.add}/>
            </div>
  )
}

export default Counter;
