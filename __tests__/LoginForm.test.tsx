import "@testing-library/jest-dom";

import { act, fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation"; // corrected from 'next/navigation'
import React from "react";

import LoginForm from "@/containers/forms/LoginForm";

import { AuthContext } from "@/context/auth.context";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-intl", () => ({
  useIntl: () => ({
    formatMessage: ({ defaultMessage }) => defaultMessage,
  }),
}));
jest.mock("../src/hooks/api", () => ({
  usePost: jest.fn(),
}));

const mockRouter = {
  push: jest.fn(),
};

const mockLogin = jest.fn();

const renderWithAuthContext = (component) => {
  return render(
    <AuthContext.Provider value={{ login: jest.fn() }}>
      {component}
    </AuthContext.Provider>,
  );
};

describe("LoginForm", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    require("../src/hooks/api").usePost.mockReturnValue({
      loading: false,
      error: null,
      fetchPost: mockLogin,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render without crashing", () => {
    renderWithAuthContext(<LoginForm />);
  });

  describe("With valid inputs", () => {
    it("should call the onSubmit function", async () => {
      renderWithAuthContext(<LoginForm />);
      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const buttonByRole = screen.getByRole("button", { name: "Log In" });

      fireEvent.change(usernameInput, {
        target: { value: "novak" },
      });
      fireEvent.change(passwordInput, {
        target: { value: "novak123" },
      });

      await act(async () => {
        fireEvent.click(buttonByRole);
      });

      expect(mockLogin).toHaveBeenCalled();
    });
  });

  describe("With invalid username", () => {
    it("should render username validation error message", async () => {
      renderWithAuthContext(<LoginForm />);
      const usernameInput = screen.getByLabelText("Username");

      fireEvent.change(usernameInput, {
        target: { value: "" },
      });
      fireEvent.blur(usernameInput);

      const errorMessage = await screen.findByText("Username is required");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("With invalid password", () => {
    it("should render password validation error message", async () => {
      render(<LoginForm />);
      const passwordInput = screen.getByLabelText("Password");

      fireEvent.change(passwordInput, {
        target: { value: "p" },
      });
      fireEvent.blur(passwordInput);

      const errorMessage = await screen.findByText(
        "Your password should have at least 3 characters",
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
