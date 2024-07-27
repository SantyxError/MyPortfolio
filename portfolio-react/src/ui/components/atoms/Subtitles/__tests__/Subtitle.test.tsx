import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Subtitle from "../Subtitle";

describe("Subtitle Component", () => {
  test("renders the text passed as prop", () => {
    const testText = "Este es un subtítulo de prueba";
    render(<Subtitle text={testText} />);
    
    const subtitleElement = screen.getByText(testText);
    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders multiple words correctly", () => {
    const longText = "Este es un subtítulo con varias palabras para verificar el renderizado.";
    render(<Subtitle text={longText} />);
    
    const subtitleElement = screen.getByText(longText);
    expect(subtitleElement).toBeInTheDocument();
  });

});
