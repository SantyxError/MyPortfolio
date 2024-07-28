import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";
import Title from "../Title";
import theme_pattern from "../../../../assets/theme_pattern.svg";

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Title Component", () => {
  test("renders the title text passed as prop", () => {
    const testText = "Sobre mí";
    renderWithTheme(<Title text={testText} image={theme_pattern} />);
    const titleElement = screen.getByText(testText);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the image with the correct alt text", () => {
    renderWithTheme(<Title text="Test Title" image={theme_pattern} />);
    const imgElement = screen.getByAltText("Title image");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", theme_pattern);
  });
});
