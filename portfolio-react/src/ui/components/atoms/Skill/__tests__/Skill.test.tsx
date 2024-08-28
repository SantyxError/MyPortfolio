import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skill from "../Skill";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Skill Component", () => {
  it("should render component", () => {
    renderProvider(
      <Skill
        imageSrc={"irrelevantImageSrc"}
        altText={"irrelevantAltText"}
        text={"irrelevanText"}
      />
    );
    const titleElement = screen.getByText("irrelevanText");
    const profileImage = screen.getByAltText("irrelevantAltText");

    expect(titleElement).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
  });
});
