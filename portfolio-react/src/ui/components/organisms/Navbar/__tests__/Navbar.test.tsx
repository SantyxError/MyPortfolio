import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Navbar Component", () => {
  it("should render component", () => {
    renderProvider(
      <Navbar
        buttonVariant={"primary"}
        onButtonClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        buttonText={""}
      />
    );
    const textElement = screen.getByText("Sobre mí");
    const profileImage = screen.getByAltText("Logo");

    expect(textElement).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
  });
});
