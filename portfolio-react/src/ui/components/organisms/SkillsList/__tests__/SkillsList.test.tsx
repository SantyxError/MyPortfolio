import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkillsList from "../SkillsList";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme";

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("SkillsList Component", () => {
  test("renders the SkillsList component with correct subtitle and skills", () => {
    renderWithTheme(<SkillsList />);

    const subtitleElement = screen.getByText("Mis Skills");
    expect(subtitleElement).toBeInTheDocument();

    const skillImages = [
      { alt: "HTML" },
      { alt: "CSS" },
      { alt: "JavaScript" },
      { alt: "TypeScript" },
      { alt: "Angular" },
      { alt: "React" },
      { alt: "Node.js" },
      { alt: "Sass" },
      { alt: "Java" },
      { alt: "Bootstrap" },
      { alt: "Tailwind" },
      { alt: "MySql" },
      { alt: "Docker" },
      { alt: "Git" },
      { alt: "Paquete Adobe" },
      { alt: "Figma" },
    ];

    skillImages.forEach(({ alt }) => {
      const skillImages = screen.queryAllByAltText(alt);
      expect(skillImages.length).toBeGreaterThan(0);
      skillImages.forEach((image) => {
        expect(image).toBeInTheDocument();
      });
    });
  });

  test("renders the SkillsList component with correct styles", () => {
    const { container } = renderWithTheme(<SkillsList />);

    const skillsListContainer = container.querySelector(
      '[data-testid="skills-list-container"]'
    );
    expect(skillsListContainer).not.toBeNull();
    if (skillsListContainer) {
      expect(skillsListContainer).toHaveStyle(`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      `);
    }

    const skillsListWrapper = container.querySelector(
      '[data-testid="skills-list-wrapper"]'
    );
    expect(skillsListWrapper).not.toBeNull();
    if (skillsListWrapper) {
      expect(skillsListWrapper).toHaveStyle(`
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 3rem;
        max-width: 1200px;
      `);
    }
  });
});
