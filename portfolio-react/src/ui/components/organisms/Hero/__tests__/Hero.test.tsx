import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Hero Component", () => {
  it("should render component", () => {
    renderProvider(
      <Hero
        primaryCtaText="irreverantPrimaryCtaText"
        secondaryCtaText="irreverantSecondaryCtaText"
      />
    );

    const nameElement = screen.getByText("Santiago Benito");
    expect(nameElement).toBeInTheDocument();

    const profileImage = screen.getByAltText("Profile Image");
    expect(profileImage).toBeInTheDocument();

    const primaryButton = screen.getByText("irreverantPrimaryCtaText");
    expect(primaryButton).toBeInTheDocument();

    const secondaryButton = screen.getByText("irreverantSecondaryCtaText");
    expect(secondaryButton).toBeInTheDocument();
  });
});
