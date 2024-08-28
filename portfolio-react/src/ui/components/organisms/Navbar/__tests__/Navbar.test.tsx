import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Navbar Component", () => {
  it("should render component", () => {
    const mockOnButtonClick = jest.fn();

    renderProvider(
      <Navbar
        buttonVariant="primary"
        onButtonClick={mockOnButtonClick}
        buttonText="irrelevantButtonText" 
      />
    );

    const textElement = screen.getByText("Sobre mí");
    const profileImage = screen.getByAltText("Logo");

    expect(textElement).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();

    const buttonElement = screen.getByText("irrelevantButtonText");
    expect(buttonElement).toBeInTheDocument();
  });
});
