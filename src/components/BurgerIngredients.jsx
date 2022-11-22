import React from 'react';
import { Icons, Counter, Tab, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';

import classes from './BurgerIngredients.module.css';

function BurgerIngredients() {

  const [current, setCurrent] = React.useState('bun');

  return (
    <div className={classes.ingredients}>

      <h2>Соберите бургер</h2>
      <nav style={{display: 'flex'}}>
      
        <Tab value='bun' active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
        <Tab value='filling' active={current === 'filling'} onClick={setCurrent}>Начинки</Tab>

      </nav>

      <div className={classes.menu}>
        <p>Булки</p>
        <div className={classes.items}>

        </div>
        <p>Соусы</p>
        <div className={classes.items}>
          
        </div>
        <p>Начинки</p>
        <div className={classes.items}>
          
        </div>
      </div>

    </div>
  )
}

export default BurgerIngredients;