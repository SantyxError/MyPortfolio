import React from "react";
import { screen } from "@testing-library/react";
import { renderProvider } from "@/__tests__/renderProvider";
import About from "../About";

describe("About Component", () => {
  it("should render component", () => {
    renderProvider(<About />);
    const titleElement = screen.getByText("Sobre mí");
    const profileImage = screen.getByAltText("Profile Image");

    expect(titleElement).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
  });
});
