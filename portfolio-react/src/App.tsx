import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Navbar from "./ui/components/organisms/Navbar/Navbar";
import { theme } from "./styles/theme/index";
import logo from './assets/logo.svg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar
        logo={logo}
        items={["Home", "Sobre mi", "Servicios", "Portfolio", "Contacto"]}
        buttonText={"Conecta conmigo"}
      />
    </ThemeProvider>
  );
}

export default App;

