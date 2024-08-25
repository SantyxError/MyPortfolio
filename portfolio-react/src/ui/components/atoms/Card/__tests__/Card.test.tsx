import { screen } from "@testing-library/react";
import React from "react";
import Card from "../Card";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Card Component", () => {
  it("should render component", () => {
    renderProvider(<Card number={""} name={""} description={""} />);
    const titleElement = screen.getByText("Leer más");

    expect(titleElement).toBeInTheDocument();
  });
});
