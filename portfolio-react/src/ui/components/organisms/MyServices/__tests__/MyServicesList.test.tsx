import React from "react";
import { render, screen, within } from "@testing-library/react";
import MyServicesList from "../MyServicesList";
import Services_Data from "../../../../../assets/services_data";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../../../styles/theme/theme";

describe("MyServicesList", () => {
  test("renders without crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <MyServicesList services={[]} />
      </ThemeProvider>
    );
  });

  test("renders all services", () => {
    render(
      <ThemeProvider theme={theme}>
        <MyServicesList services={Services_Data} />
      </ThemeProvider>
    );

    Services_Data.forEach((service) => {
      const serviceElement = screen
        .getByText(service.s_no)
        .closest(".sc-braxZu") as HTMLElement;

      expect(serviceElement).toBeInTheDocument();

      const withinService = within(serviceElement);

      expect(withinService.getByText(service.s_no)).toBeInTheDocument();
      expect(withinService.getByText(service.s_name)).toBeInTheDocument();
      expect(withinService.getByText(service.s_desc)).toBeInTheDocument();
    });
  });
});
