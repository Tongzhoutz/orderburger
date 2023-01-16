import React from'react';
import classes from './Meal.module.scss';
import Counter from '../../../UI/Counter/Counter';
{/* props includes 4 properties: title/desc/price/amount */}

const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} alt=""/>
            </div>
            <div className={classes.descBox}>
                <h2 className={classes.title}>{props.meal.title}</h2>

                 <p className={classes.desc}> {props.meal.desc}</p>
                <div className={classes.priceWrapper}>
                    <span className={classes.price}>{props.meal.price}</span>
                    <Counter  meal={props.meal} />
                </div>
            </div>
        </div>
    );
};
export default Meal;