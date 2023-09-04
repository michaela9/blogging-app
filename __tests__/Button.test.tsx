import { render, screen } from "@testing-library/react";
import React from "react";

import Button from "@/components/Button";

describe("Button", () => {
  it("should render the correct label", () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply the primary style when style is set to "primary"', () => {
    render(<Button style="primary">Primary</Button>);

    const buttonElement = screen.getByText("Primary");
    expect(buttonElement).toHaveClass("bg-primary");
  });

  it('should apply the secondary style when style is set to "secondary"', () => {
    render(<Button style="secondary">Secondary</Button>);

    const buttonElement = screen.getByText("Secondary");
    expect(buttonElement).toHaveClass("text-primary");
  });

  it("should sets the button type correctly", () => {
    render(<Button type="submit">Submit</Button>);

    const buttonElement = screen.getByText("Submit");
    expect(buttonElement.type).toBe("submit");
  });

  it("should sets the button as disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);

    const buttonElement = screen.getByText("Disabled");
    expect(buttonElement).toBeDisabled();
  });
});
