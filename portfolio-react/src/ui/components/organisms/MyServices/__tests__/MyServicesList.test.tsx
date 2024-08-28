import React from "react";
import { screen } from "@testing-library/react";
import { renderProvider } from "@/__tests__/renderProvider";
import MyServicesList from "../MyServicesList";

describe("MyServices Component", () => {
  it("should render component", () => {
    renderProvider(<MyServicesList services={[]} />);
    const titleElement = screen.getByText("Mis Servicios");

    expect(titleElement).toBeInTheDocument();
  });

  it("should render services passed as props", () => {
    const services = [
      {
        number: "irrelevantNumber",
        name: "irrelevantName",
        description: "irrelevantDescription",
      },
    ];

    renderProvider(<MyServicesList services={services} />);

    services.forEach((service) => {
      expect(screen.getByText(service.number)).toBeInTheDocument();
      expect(screen.getByText(service.name)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });
});
