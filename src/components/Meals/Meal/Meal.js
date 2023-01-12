import React from'react';
import classes from './Meal.module.scss';
import { AddCircleOutline, MinusCircleOutline } from 'antd-mobile-icons';
import cartContext from '../../../store/cart-context';
import { useContext } from 'react';
{/* props includes 4 properties: title/desc/price/amount */}

const Meal = (props) => {
    const cartCTX = useContext(cartContext);
    const addMealHandler = () => {
        cartCTX.addItem(props.meal);
    }
    const subMealHandler = () =>  {
        cartCTX.removeItem(props.meal);
    }
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt=""/>
            </div>
            <div>
                <h2 className={classes.title}>{props.meal.title}</h2>
                <p className={classes.desc}>
                    {props.meal.desc}
                </p>
                <div className={classes.priceWrapper}>
                    <span className={classes.price}>{props.meal.price}</span>
                    <div>
                        {
                            (props.meal.amount && props.mealamount !== 0) ? (
                                <>
                                    <MinusCircleOutline onClick={subMealHandler} className={classes.subtract}/>
                                    <span className={classes.amount}>{props.meal.amount}</span>
                                </>
                            ) : null
                        }
                        <AddCircleOutline onClick={addMealHandler} className={classes.add}/></div>
                </div>
            </div>
        </div>
    );
};
export default Meal;