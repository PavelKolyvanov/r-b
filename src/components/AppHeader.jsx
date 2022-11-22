import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import classes from './AppHeader.module.css';

function AppHeader() {
  return (
    <div className={classes.header}>
      <div className={`${classes.content} pt-4 pb-4`}>
        <div className={classes.navbar}>
          <div className={`${classes.item} p-5`} style={{ backgroundColor: '#0B5FFF', color: 'white' }} >
            <BurgerIcon />
            <a href='/constructor' className='text text_type_main-default ml-2' style={{ backgroundColor: '#0B5FFF', color: 'white' }} >Конструктор</a>
          </div>
          <div className={classes.item}>
            <ListIcon />
            <a href='/orders' className='text text_type_main-default ml-2'>Лента заказов</a>
          </div>
        </div>
        <Logo />

        <div className={classes.item}>
          <ProfileIcon />
          <a href='/profile' className='text text_type_main-default ml-2'>Личный кабинет</a>
        </div>

      </div>
    </div>
  )
}

export default AppHeader;
