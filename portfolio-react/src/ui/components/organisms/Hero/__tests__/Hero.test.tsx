import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Hero Component", () => {
  it("should render component", () => {
    renderProvider(<Hero primaryCtaText={""} secondaryCtaText={""} />);
    const titleElement = screen.getByText("Santiago Benito");
    const profileImage = screen.getByAltText("Profile Image");

    expect(titleElement).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
  });
});
