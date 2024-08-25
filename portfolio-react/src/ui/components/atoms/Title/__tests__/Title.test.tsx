import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "../Title";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Title Component", () => {
  it("should render component", () => {
    renderProvider(
      <Title text={"Titulo"} image={"src/assets/theme_pattern.svg"} />
    );
    const titleElement = screen.getByText("Titulo");

    expect(titleElement).toBeInTheDocument();
  });
});
