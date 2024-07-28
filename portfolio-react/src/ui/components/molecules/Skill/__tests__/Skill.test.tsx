import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";
import Skill from "../Skill";

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Skill Component", () => {
  test("renders with correct image and text", () => {
    const imageSrc = "https://example.com/image.png";
    const altText = "Skill Image";
    const text = "Skill Name";

    renderWithTheme(
      <Skill imageSrc={imageSrc} altText={altText} text={text} />
    );

    const skillImage = screen.getByTestId("skill-image") as HTMLImageElement;
    expect(skillImage).toBeInTheDocument();
    expect(skillImage.src).toBe(imageSrc);

    const skillText = screen.getByTestId("skill-text");
    expect(skillText).toBeInTheDocument();
    expect(skillText.textContent).toBe(text);
  });

  test("renders with correct styles", () => {
    const imageSrc = "https://example.com/image.png";
    const altText = "Skill Image";
    const text = "Skill Name";

    const { getByTestId } = renderWithTheme(
      <Skill imageSrc={imageSrc} altText={altText} text={text} />
    );

    const skillWrapper = getByTestId("skill-wrapper");
    expect(skillWrapper).toHaveStyle(`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    `);

    const skillImageContainer = getByTestId("skill-image-container");
    expect(skillImageContainer).toHaveStyle(`
      width: 4.2rem;
      height: 4.2rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      border: 4px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%);
    `);

    const skillImage = getByTestId("skill-image");
    expect(skillImage).toHaveStyle(`
      width: 3.4rem;
      height: 3.4rem;
    `);

    const skillText = getByTestId("skill-text");
    expect(skillText).toHaveStyle(`
      margin: 0;
      width: 5rem;
    `);
  });
});
