import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";

// Mock del botón
jest.mock("../../../atoms/Button/Button", () => ({
  Button: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
  }) => <button onClick={onClick}>{children}</button>,
}));

describe("Navbar Component", () => {
  const buttonText = "Conecta conmigo";
  const buttonVariant = "primary" as const;
  const handleClick = jest.fn();

  const renderNavbar = () =>
    render(
      <ThemeProvider theme={theme}>
        <Navbar
          buttonText={buttonText}
          buttonVariant={buttonVariant}
          onButtonClick={handleClick}
        />
      </ThemeProvider>
    );

  it("should render Navbar with all props", () => {
    renderNavbar();

    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    const menuItems = ["Home", "Sobre mi", "Servicios", "Portfolio", "Contact"];
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it("should handle button clicks", () => {
    renderNavbar();

    const button = screen.getByText(buttonText);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
