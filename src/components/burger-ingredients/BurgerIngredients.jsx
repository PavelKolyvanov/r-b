import React from 'react';
import { CurrencyIcon, Counter, Tab, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';

import Ingredient from '../ingredient/Ingredient';
import data from '../../utils/data.js';

import classes from './BurgerIngredients.module.css';

function BurgerIngredients(props) {

  const [current, setCurrent] = React.useState('bun');

  return (
    <section className={classes.ingredients}>

      <h2 className={`text text_type_main-large mt-10 mb-5 ${classes.title}`}>Соберите бургер</h2>
      <nav className={` ${classes.tabs} pb-10`}>
      
        <Tab value='bun' active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab>
        <Tab value='filling' active={current === 'filling'} onClick={setCurrent}>Начинки</Tab>

      </nav>

      <div className={classes.cards}>
        <h3 className={`text text_type_main-medium mb-6 mt-10 ${classes.title_type}`}>Булки</h3>
        <div className={classes.type}>
          <Ingredient 
            image = {data[0].image}
            price = {data[0].price}
            name = {data[0].name}
          />
          <Ingredient 
            image = {data[0].image}
            price = {data[0].price}
            name = {data[0].name}
          />
        </div>

        <h3 className={`text text_type_main-medium mb-6 mt-10 ${classes.title_type}`}>Соусы</h3>
        <div className={classes.type}>
          <Ingredient 
            image = {data[0].image}
            price = {data[0].price}
            name = {data[0].name}
          />
          <Ingredient 
            image = {data[0].image}
            price = {data[0].price}
            name = {data[0].name}
          />
        </div>
        <h3 className={`text text_type_main-medium mb-6 mt-10 ${classes.title_type}`}>Начинки</h3>

        <div className={classes.type}>
          <Ingredient 
            image = {data[0].image}
            price = {data[0].price}
            name = {data[0].name}
          />
          <Ingredient 
            image = {data[0].image}
            price = {data[0].price}
            name = {data[0].name}
          />
          <Ingredient 
            image = {data[0].image}
            price = {data[0].price}
            name = {data[0].name}
          />
        </div>

      </div>

    </section>
  )
}

export default BurgerIngredients;