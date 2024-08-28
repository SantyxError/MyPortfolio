import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Footer from "../Footer";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Footer Component", () => {
  it("should render component", () => {
    renderProvider(<Footer />);
    const textElement = screen.getByText("Terminos de servicio");
    expect(textElement).toBeInTheDocument();
  });
});
