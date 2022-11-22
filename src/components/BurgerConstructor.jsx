import React from 'react';
import { Icons, elSpisok, Button, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';

import classes from './BurgerConstructor.module.css';

function BurgerConstructor() {
  return (
    <div className={classes.content}>
      
      <div className={classes.items}>
        <div className={classes.item}>
          <icon></icon>
          <p>булка</p>
          <price>30</price>
          <trash></trash>
        </div>
        <div className={classes.item}>
          <icon></icon>
          <p>булка</p>
          <price>30</price>
          <trash></trash>
        </div>
        <div className={classes.item}>
          <icon></icon>
          <p>булка</p>
          <price>30</price>
          <trash></trash>
        </div>
      </div>

      <div className={classes.itogo}>
        <price />
        
        <Button type='primary' size='small' extraClass='ml-2'>
          Нажми на меня
        </Button> 
      </div>

    </div>
  )
}

export default BurgerConstructor;