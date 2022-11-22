import React from 'react';
import AppHeader from './components/AppHeader';
import './App.css';
import BurgerConstructor from './components/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients';


function App() {
  return (
    <div className='App'>
      <AppHeader  />
        

      <BurgerIngredients />

      <BurgerConstructor />

        
        
  </div>
  );
}

export default App;
