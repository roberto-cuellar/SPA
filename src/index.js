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
// import { useTheme,ThemeProvider, createTheme } from '@mui/material/styles';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="inicio" element={<Inicio />} />
            <Route path="items" element={<Items />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    // </ThemeProvider>

);
