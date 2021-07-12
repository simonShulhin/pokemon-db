import './app.css';
import { HomePage } from '../pages';
import React from 'react';
import Header from '../header/header';

export const App = () => {
  return (
    <main role='main' className='container'>
      <Header />
      <HomePage />
    </main>
  );
};
