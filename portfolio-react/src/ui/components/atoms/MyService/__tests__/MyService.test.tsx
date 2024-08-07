import { render, screen } from "@testing-library/react";
import { theme } from "../../../../../styles/theme";
import React from "react";
import MyService from "../MyService";
import { ThemeProvider } from "styled-components";

describe("MyService", () => {
  const mockService = {
    s_no: "01",
    s_name: "Web Design",
    s_desc: "Web development is the process of building, programming...",
  };

  test("renders MyService component with given props", () => {
    render(
      <ThemeProvider theme={theme}>
        <MyService
          s_no={mockService.s_no}
          s_name={mockService.s_name}
          s_desc={mockService.s_desc}
        />
      </ThemeProvider>
    );

    expect(screen.getByText(mockService.s_no)).toBeInTheDocument();
    expect(screen.getByText(mockService.s_name)).toBeInTheDocument();
    expect(screen.getByText(mockService.s_desc)).toBeInTheDocument();
  });
});
