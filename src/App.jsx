import React from 'react';
import AppHeader from './components/app-header/AppHeader';
import './App.css';
import BurgerConstructor from './components/burger-constructor/BurgerConstructor';
import BurgerIngredients from './components/burger-ingredients/BurgerIngredients';


function App() {
  return (
    <div className='App'>
      <AppHeader  />
        
      <main className='mainContent'>
        <BurgerIngredients />

        <BurgerConstructor />
      </main>


        
        
  </div>
  );
}

export default App;
