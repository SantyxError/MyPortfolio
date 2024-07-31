import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Navbar from "./ui/components/organisms/Navbar/Navbar";
import { theme } from "./styles/theme/index";
import logo from './assets/logo.svg';
import Hero from "./ui/components/organisms/Hero/Hero";
import About from "./ui/components/organisms/About/About";
import MyServicesList from "./ui/components/organisms/MyServices/MyServicesList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar
        logo={logo}
        items={["Home", "Sobre mi", "Servicios", "Portfolio", "Contacto"]}
        buttonText={"Conecta conmigo"} onButtonClick={function (): void {
          throw new Error("Function not implemented.");
        } } buttonVariant={"primary"}      />
      <Hero
        connectText="Conecta conmigo"
        resumeText="Mis Trabajos"
      />
      <About></About>
      <MyServicesList />
    </ThemeProvider>
  );
}

export default App;

