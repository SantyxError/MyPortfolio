import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Contact Component", () => {
  it("should render component", () => {
    renderProvider(<Contact />);
    const titleElement = screen.getByText("Contacto");
    const emailElement = screen.getByText("email@gmail.com");
    const inputElement = screen.getByText("Tu nombre");

    expect(titleElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
});
