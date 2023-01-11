import React from'react';
import classes from './Meal.module.scss';
import { AddCircleOutline, MinusCircleOutline } from 'antd-mobile-icons';

const Meal = ({amount}) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="/img/meals/1.png" alt=""/>
            </div>
            <div>
                <h2 className={classes.title}>Burger King</h2>
                <p className={classes.desc}>
                    Free 1 Croissan'wich or 1 Whopper or 1 OCS w/ Purchase $3+
                    New registered app users only. Purchase required. Valid on delivery orders.
                </p>
                <div className={classes.priceWrapper}>
                    <span className={classes.price}>12</span>
                    <div>
                        {
                            (amount && amount !== 0) ? (
                                <>
                                    <MinusCircleOutline className={classes.subtract}/>
                                    <span className={classes.amount}>{amount}</span>
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