// src/ui/components/organisms/Footer/__tests__/Footer.test.tsx
import { render, screen, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme"; // Ajusta la ruta según tu estructura
import { BrowserRouter } from "react-router-dom";
import React from "react";

// Renderizado personalizado con ThemeProvider y otros proveedores necesarios
const renderWithProviders = (ui: React.ReactElement, options?: RenderOptions) =>
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>,
    options
  );

describe("Footer Component", () => {
  test("renders Footer with all elements", () => {
    renderWithProviders(<Footer connectText="Connect" />);

    // Verifica que el logo está en el documento
    expect(screen.getByAltText("Footer Logo")).toBeInTheDocument();

    // Verifica que el texto del párrafo está en el documento
    expect(
      screen.getByText(/I'm currently available to take on new projects/)
    ).toBeInTheDocument();

    // Verifica que el campo de entrada de email está en el documento
    expect(screen.getByPlaceholderText("Inserta tu email")).toBeInTheDocument();

    // Verifica que el botón de conexión está en el documento y tiene el texto correcto
    expect(screen.getByText("Connect")).toBeInTheDocument();

    // Verifica el copyright
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(
        `© ${currentYear} Santiago Benito. All rights reserved.`
      )
    ).toBeInTheDocument();

    // Verifica que los enlaces están en el documento
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Connect with me")).toBeInTheDocument();
  });
});
