import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import Navbar from "./ui/components/organisms/Navbar/Navbar";
import { theme } from "./styles/theme/index";
import Hero from "./ui/components/organisms/Hero/Hero";
import About from "./ui/components/organisms/About/About";
import MyServicesList from "./ui/components/organisms/MyServices/MyServicesList";
import Services from "./assets/services_data";
import MyWorksList from "./ui/components/organisms/MyWorkList/MyWorksList";
import Contact from "./ui/components/organisms/Contact/Contact";
import Footer from "./ui/components/organisms/Footer/Footer";

const myWorkData = [
  { title: "Project 1", workImg: "src/assets/project_1.svg" },
  { title: "Project 2", workImg: "src/assets/project_2.svg" },
  { title: "Project 3", workImg: "src/assets/project_3.svg" },
  { title: "Project 4", workImg: "src/assets/project_4.svg" },
  { title: "Project 5", workImg: "src/assets/project_5.svg" },
  { title: "Project 6", workImg: "src/assets/project_6.svg" },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar
        buttonVariant="primary"
        onButtonClick={() => console.log("Button clicked")}
        buttonText="Conecta conmigo"
      />
      <Hero primaryCtaText="Conecta conmigo" secondaryCtaText="Mis Trabajos" />
      <About />
      <MyServicesList services={Services} />
      <MyWorksList myWorkData={myWorkData} />
      <Contact />
      <Footer connectButtonText="Conecta conmigo" />
    </ThemeProvider>
  );
}

export default App;
