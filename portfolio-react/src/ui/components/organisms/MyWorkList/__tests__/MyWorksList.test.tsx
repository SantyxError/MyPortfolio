import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyWorksList from "../MyWorksList";
import { renderProvider } from "@/__tests__/renderProvider";

describe("MyWorkList Component", () => {
  it("should render component", () => {
    renderProvider(<MyWorksList myWorkData={[]} />);
    const titleElement = screen.getByText("Mis últimos trabajos");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render works passed as props", () => {
    const myWorkData = [
      {
        title: "irrelevantTitle",
        workImg: "irrelevantWorkImg",
      },
    ];

    renderProvider(<MyWorksList myWorkData={myWorkData} />);

    myWorkData.forEach((work) => {
      const workImage = screen.getByAltText("Work Image");
      expect(workImage).toBeInTheDocument();
      expect(workImage).toHaveAttribute("src", work.workImg);
    });
  });
});
