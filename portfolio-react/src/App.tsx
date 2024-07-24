// src/App.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme'; 
import Navbar from './ui/components/organisms/Navbar/Navbar';
import logo from './assets/logo.svg';

function App() {
  const menuItems = ['Home', 'Sobre mi', 'Servicios', 'Portfolio', 'Contacto'];

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar logo={logo} items={menuItems} />
      </div>
    </ThemeProvider>
  );
}

export default App;
