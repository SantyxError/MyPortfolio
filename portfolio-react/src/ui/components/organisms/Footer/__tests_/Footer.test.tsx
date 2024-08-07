import { render, screen, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";
import { BrowserRouter } from "react-router-dom";
import React from "react";

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

    expect(screen.getByAltText("Footer Logo")).toBeInTheDocument();

    expect(
      screen.getByText(/I'm currently available to take on new projects/)
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Inserta tu email")).toBeInTheDocument();

    expect(screen.getByText("Connect")).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(
        `© ${currentYear} Santiago Benito. All rights reserved.`
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Connect with me")).toBeInTheDocument();
  });
});
