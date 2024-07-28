import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import About from "../About";
import { ThemeProvider } from "styled-components";
import { theme } from '../../../../../styles/theme'; 

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("About Component", () => {
  test("renders the title", () => {
    renderWithTheme(<About />);
    const titleElement = screen.getByText(/Sobre mí/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders profile image", () => {
    renderWithTheme(<About />);
    const profileImage = screen.getByAltText("Profile Image");
    expect(profileImage).toBeInTheDocument();
  });

  test("renders paragraphs", () => {
    renderWithTheme(<About />);
    const paragraphs = [
      "Apasionado programador con un profundo amor por el mundo de la tecnología y la resolución creativa de problemas. He tenido el privilegio de trabajar en proyectos emocionantes y desafiantes que han moldeado mi habilidad y enfoque en esta industria en constante evolución.",
      "Mi día a día gira en torno a Java o React y me especializo en desarrollo front-end/back-end. Siempre estoy emocionado por enfrentar nuevos desafíos y encontrar formas creativas de abordarlos.",
      "Además de mis habilidades técnicas, creo firmemente en el poder del trabajo en equipo y la colaboración. He tenido la oportunidad de trabajar con equipos diversos y multidisciplinarios, donde he aprendido la importancia de la comunicación efectiva y el intercambio de conocimientos.",
      "Mi pasión por mantenerme al tanto de las últimas tendencias y avances en la industria me impulsa a continuar aprendiendo y creciendo. Siempre estoy buscando nuevos desafíos que me permitan aplicar mis habilidades y aportar valor significativo.",
      "Si algo de esto te interesa, ¡me encantaría conectar contigo!"
    ];

    paragraphs.forEach(text => {
      const paragraphElement = screen.getByText(text);
      expect(paragraphElement).toBeInTheDocument();
    });
  });

  test("renders SkillsList component", () => {
    renderWithTheme(<About />);
    
    const skillElements = screen.queryAllByText(/HTML/i);
    expect(skillElements.length).toBeGreaterThan(0);
    skillElements.forEach(element => {
      expect(element).toBeInTheDocument();
    });
  });
});
