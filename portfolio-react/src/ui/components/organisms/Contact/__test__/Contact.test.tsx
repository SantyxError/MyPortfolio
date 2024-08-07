// src/ui/components/organisms/Contact/__tests__/Contact.test.tsx
import React from "react";
import { render, screen, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme"; // Ajusta la ruta según tu estructura
import { BrowserRouter } from "react-router-dom";

// Renderizado personalizado con ThemeProvider y BrowserRouter
const renderWithProviders = (ui: React.ReactElement, options?: RenderOptions) =>
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>,
    options
  );

describe("Contact Component", () => {
  test("renders Contact with all elements", () => {
    renderWithProviders(<Contact />);

    // Verifica que el título está en el documento
    expect(screen.getByText("Estamos en contacto")).toBeInTheDocument();

    // Verifica que el párrafo está en el documento
    expect(
      screen.getByText(/I'm currently available to take on new projects/)
    ).toBeInTheDocument();

    // Verifica los detalles de contacto
    expect(screen.getByText("email@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+1234-56-78")).toBeInTheDocument();
    expect(screen.getByText("Valencia, España")).toBeInTheDocument();

    // Verifica los campos del formulario
    expect(
      screen.getByPlaceholderText("Introduce tu nombre")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Introduce tu email")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Introduce tu mensaje")
    ).toBeInTheDocument();

    // Verifica el botón
    expect(screen.getByText("Enviar mensaje")).toBeInTheDocument();
  });
});
