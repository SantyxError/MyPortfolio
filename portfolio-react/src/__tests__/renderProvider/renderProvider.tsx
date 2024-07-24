import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { render } from "@testing-library/react";

export const renderProvider = (node: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{node}</ThemeProvider>);
};