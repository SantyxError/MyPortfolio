import React from "react";
import { renderProvider } from "../renderProvider";

describe("renderProvider", () => {
  it("should render component ", () => {
    const { container } = renderProvider(<div>Test</div>);
    expect(container).toBeInTheDocument();
  });
});
