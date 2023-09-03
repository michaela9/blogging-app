// import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import React from "react";

import Home from "@/app/(public)/(home)/page";

describe("HomePage - Rendering", () => {
  it("should have Home Page text", () => {
    render(<Home />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("should render a Button with text Click me", () => {
    render(<Home />);
    screen.getByRole("button", { name: "Click me" });
  });
});
