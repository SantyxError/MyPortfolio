import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyWorksList from "../MyWorksList";
import { renderProvider } from "@/__tests__/renderProvider";

describe("MyWorkList Component", () => {
  it("should render component", () => {
    renderProvider(<MyWorksList myWorkData={[]} />);
    const titleElement = screen.getByText("Mis últimos trabajos");
    expect(titleElement).toBeInTheDocument();
  });
});
