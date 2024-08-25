import React from "react";
import { screen } from "@testing-library/react";
import { renderProvider } from "@/__tests__/renderProvider";
import MyServicesList from "../MyServicesList";

describe("MyServices Component", () => {
  it("should render component", () => {
    renderProvider(<MyServicesList services={[]} />);
    const titleElement = screen.getByText("Mis Servicios");

    expect(titleElement).toBeInTheDocument();
  });
});