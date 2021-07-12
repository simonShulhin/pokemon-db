import './app.css';
import { Route, Switch } from 'react-router';
import { HomePage, CartPage } from '../pages';
import PokeApiService from '../../services/pokeapi-service';
import React, { useEffect, useState } from 'react';
import { SelectQuantity } from '../select-quantity';

export const App = () => {
  return (
    <main role='main' className='container'>
     
      <HomePage />
    </main>
  );
};
