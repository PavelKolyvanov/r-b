import React from 'react';
import { DragIcon, CurrencyIcon, Button, ConstructorElement, Box } from '@ya.praktikum/react-developer-burger-ui-components';

import data from '../../utils/data.js';

import classes from './BurgerConstructor.module.css';
import BurgerIngredients from '../burger-ingredients/BurgerIngredients';
import { isPropertySignature } from 'typescript';

function BurgerConstructor() {
  return (
    <div className={` ${classes.content} ml-10 pt-25`}>
      <div className={` ${classes.constructor_list} mr-4 ml-4`}>
        <div className={`${classes.item} mb-4`}>
          <ConstructorElement 
            type='top'
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        
        <ul className={classes.items}>
          
          {data.map((item, index) => {
            return (
              <li className={`${classes.item} mb-4`} key={index}>
                <DragIcon />
                <div className={`${classes.item_fullwidth} ml-2`}>
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    isLocked={false} />
                </div>
              </li>
            )
          })}
        </ul>
        <div className={`${classes.item} `}>
          <ConstructorElement 
            type='bottom'
            isLocked={true}
            text={data[0].name}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
      </div>
      <div className={` ${classes.result} mt-10`}>
        <p className='text text_type_digits-medium'>610</p>
        <CurrencyIcon />
        <Button type='primary' size='large' extraClass='ml-10'>
          Оформить заказ
        </Button> 
      </div>

    </div>
  )
}

export default BurgerConstructor;