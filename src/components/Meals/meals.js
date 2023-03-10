import React from'react';
import Meal from './Meal/Meal';
import classes from './meals.module.scss';

const Meals = ({MealsData}) => {
    
    return (
        <>
        <div className={classes.meals}>
            {MealsData.map(item => <Meal key={item.id} meal={item} containDesc={true}/>)}
        </div>
        </>
    );
};

export default Meals;