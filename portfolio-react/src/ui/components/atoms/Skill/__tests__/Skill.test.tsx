import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skill from "../Skill";
import { renderProvider } from "@/__tests__/renderProvider";

describe("Skill Component", () => {
  it("should render component", () => {
    renderProvider(
      <Skill
        imageSrc={"srcassetsskillscss3-original-wordmark.svg"}
        altText={"CSS"}
        text={"CSS"}
      />
    );
    const titleElement = screen.getByText("CSS");
    const profileImage = screen.getByAltText("CSS");

    expect(titleElement).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
  });
});
