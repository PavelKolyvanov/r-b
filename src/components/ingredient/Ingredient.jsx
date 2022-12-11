import React from 'react';
import { CurrencyIcon, Counter, Tab, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';

import classes from './Ingredient.module.css';

function Ingredient(props) {

  return (
    <div className={`${classes.card} ml-3 mr-3`}>
      <img src={props.image} alt='ингредиент' className={classes.image}/>
      <div className={classes.counterQ}>

          <Counter count={1} size='small' className='mr-3'/>

        
      </div>
          
      <div className={classes.price}>
        <p className='text text_type_main-medium mr-2'>{props.price}</p>
        <CurrencyIcon />
        
            
      </div>
      <h4 className='text text_type_main-default mt-2'>{props.name}</h4>
    </div>
  )
}

export default Ingredient;