import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Subtitle from "../Subtitle";
import { ThemeProvider } from "styled-components";
import { theme } from '../../../../../styles/theme'; 

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Subtitle Component", () => {
  test("renders the text passed as prop", () => {
    const testText = "Este es un subtítulo de prueba";
    renderWithTheme(<Subtitle text={testText} />);
    
    const subtitleElement = screen.getByText(testText);
    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders multiple words correctly", () => {
    const longText = "Este es un subtítulo con varias palabras para verificar el renderizado.";
    renderWithTheme(<Subtitle text={longText} />);
    
    const subtitleElement = screen.getByText(longText);
    expect(subtitleElement).toBeInTheDocument();
  });
});
