import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes ,
  Route
} from "react-router-dom"
import { Inicio } from './componentes/Inicio';
import { Items } from './componentes/Items';
import { Contacto } from './componentes/Contacto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="inicio" element={<Inicio />} />
          <Route path="items" element={<Items />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>

);
