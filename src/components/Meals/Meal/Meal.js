import React from'react';
import classes from './Meal.module.scss';
import { AddCircleOutline, MinusCircleOutline } from 'antd-mobile-icons';

{/* props includes 4 properties: title/desc/price/amount */}

const Meal = (props) => {
    
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
                                    <MinusCircleOutline className={classes.subtract}/>
                                    <span className={classes.amount}>{props.meal.amount}</span>
                                </>
                            ) : null
                        }
                        <AddCircleOutline className={classes.add}/></div>
                </div>
            </div>
        </div>
    );
};
export default Meal;