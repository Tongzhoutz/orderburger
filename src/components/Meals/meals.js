import React from'react';
import Meal from './Meal/Meal';
import classes from './meals.module.scss';
const Meals = () => {
    
    return (
        <div className={classes.meals}>
            <Meal amount={3} />
            <Meal />
            <Meal />
            <Meal />
        </div>
    );
};

export default Meals;