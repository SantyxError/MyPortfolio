import { screen } from "@testing-library/react";
import React from "react";
import Card from "../Card";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Card Component", () => {
  it("should render component", () => {
    renderProvider(<Card number="" name="" description="" />);
    const titleElement = screen.getByText("Leer más");

    expect(titleElement).toBeInTheDocument();
  });

  it("should display number, name, and description when passed as props", () => {
    const number = "irrelevantNumber";
    const name = "irrelevantName";
    const description = "irrelevantDescription";

    renderProvider(
      <Card number={number} name={name} description={description} />
    );

    const numberElement = screen.getAllByText(number)[0];
    const nameElement = screen.getByText(name);
    const descriptionElement = screen.getByText(description);

    expect(numberElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
