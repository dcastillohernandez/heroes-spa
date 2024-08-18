import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importamos BrowserRouter de react-router-dom

import { HeroesApp } from './HeroesApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Usamos BrowserRouter para redirigir entre rutas recordar que BrowserRouter es un higher order component */}
    {/* Siempre poner el BrowserRouter dentro del modo de React.StrictMode */}
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
);
