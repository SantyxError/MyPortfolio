import { screen } from "@testing-library/react";
import React from "react";
import { renderProvider } from "@/__tests__/renderProvider";
import { Text } from "@/ui/components/atoms/Text/Text.styled";
describe("Text Component", () => {
  it("should render component", () => {
    renderProvider(<Text>Eso es una prueba</Text>);
    const textElement = screen.getByText("Eso es una prueba");

    expect(textElement).toBeInTheDocument();
  });
});
