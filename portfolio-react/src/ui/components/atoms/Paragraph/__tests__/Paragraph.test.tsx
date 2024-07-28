import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Paragraph from "../Paragraph";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Paragraph Component", () => {
  test("renders the text passed as prop", () => {
    const testText = "Este es un párrafo de prueba";
    renderWithTheme(<Paragraph text={testText} />);

    const paragraphElement = screen.getByText(testText);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders multiple words correctly", () => {
    const longText =
      "Este es un párrafo con muchas palabras para verificar el renderizado.";
    renderWithTheme(<Paragraph text={longText} />);

    const paragraphElement = screen.getByText(longText);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("does not render an empty string", () => {
    renderWithTheme(<Paragraph text="" />);

    const paragraphElement = screen.queryByTestId("paragraph");
    expect(paragraphElement).not.toBeInTheDocument();
  });
});
