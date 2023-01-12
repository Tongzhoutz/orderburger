import React from'react';
import Meal from './Meal/Meal';
import classes from './meals.module.scss';
const Meals = ({MealsData, onAdd, onSub}) => {
    
    return (
        <div className={classes.meals}>
            {MealsData.map(item => <Meal key={item.id} meal={item} onSub={onSub} onAdd={onAdd} />)}
        
        </div>
    );
};

export default Meals;