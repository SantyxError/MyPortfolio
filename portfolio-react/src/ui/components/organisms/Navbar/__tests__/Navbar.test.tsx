import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";

jest.mock("../../../atoms/Button/Button.styled", () => ({
  Button: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
  }) => <button onClick={onClick}>{children}</button>,
}));

describe("Navbar Component", () => {
  const logo = "path/to/logo.svg";
  const buttonText = "Conecta conmigo";
  const buttonVariant = "primary" as const;
  const handleClick = jest.fn();

  const renderNavbar = () =>
    render(
      <ThemeProvider theme={theme}>
        <Navbar
          logo={logo}
          items={["Home", "Sobre mi", "Servicios", "Portfolio", "Contacto"]}
          buttonText={buttonText}
          buttonVariant={buttonVariant}
          onButtonClick={handleClick}
        />
      </ThemeProvider>
    );

  it("should render Navbar with all props", () => {
    renderNavbar();

    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    const menuItems = [
      "Home",
      "Sobre mi",
      "Servicios",
      "Portfolio",
      "Contacto",
    ];
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
