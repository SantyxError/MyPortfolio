import React from "react";
import { render, screen, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";
import { BrowserRouter } from "react-router-dom";

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

    expect(screen.getByText("Estamos en contacto")).toBeInTheDocument();

    expect(
      screen.getByText(/I'm currently available to take on new projects/)
    ).toBeInTheDocument();

    expect(screen.getByText("email@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+1234-56-78")).toBeInTheDocument();
    expect(screen.getByText("Valencia, España")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Introduce tu nombre")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Introduce tu email")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Introduce tu mensaje")
    ).toBeInTheDocument();

    expect(screen.getByText("Enviar mensaje")).toBeInTheDocument();
  });
});
