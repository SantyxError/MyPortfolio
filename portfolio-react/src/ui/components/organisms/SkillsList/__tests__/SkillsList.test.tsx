import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkillsList from "../SkillsList";
import { renderProvider } from "@/__tests__/renderProvider";

describe("SkillsList Component", () => {
  it("should render component", () => {
    renderProvider(<SkillsList />);
    const titleElement = screen.getByText("Mis skills");

    expect(titleElement).toBeInTheDocument();
  });
});
