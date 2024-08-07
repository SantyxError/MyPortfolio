import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyWorksList from "../MyWorksList";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";

// Simulación de datos de trabajo
const mockMyWorkData = [
  { id: 1, title: "Project 1", w_img: "image1.png" },
  { id: 2, title: "Project 2", w_img: "image2.png" },
  { id: 3, title: "Project 3", w_img: "image3.png" },
];

describe("MyWorksList", () => {
  test("renders the component with the correct title", () => {
    render(
      <ThemeProvider theme={theme}>
        <MyWorksList myWorkData={mockMyWorkData} />
      </ThemeProvider>
    );

    expect(screen.getByText("Mis últimos trabajos")).toBeInTheDocument();
  });

  test("renders the correct number of images", () => {
    render(
      <ThemeProvider theme={theme}>
        <MyWorksList myWorkData={mockMyWorkData} />
      </ThemeProvider>
    );

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(mockMyWorkData.length + 1); 
  });

  test("renders the 'Show More' button", () => {
    render(
      <ThemeProvider theme={theme}>
        <MyWorksList myWorkData={mockMyWorkData} />
      </ThemeProvider>
    );

    expect(screen.getByText("Mostrar más")).toBeInTheDocument();
  });
});
