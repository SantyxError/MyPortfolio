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
  { id: 1, title: "Project 1", w_img: "src/assets/project_1.svg" },
  { id: 2, title: "Project 2", w_img: "src/assets/project_2.svg" },
  { id: 3, title: "Project 3", w_img: "src/assets/project_3.svg" },
  { id: 4, title: "Project 4", w_img: "src/assets/project_4.svg" },
  { id: 5, title: "Project 5", w_img: "src/assets/project_5.svg" },
  { id: 6, title: "Project 6", w_img: "src/assets/project_6.svg" },
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
      <Hero connectText="Conecta conmigo" resumeText="Mis Trabajos" />
      <About />
      <MyServicesList services={Services} />
      <MyWorksList myWorkData={myWorkData} />
      <Contact />
      <Footer connectText="Conecta conmigo" />
    </ThemeProvider>
  );
}

export default App;
