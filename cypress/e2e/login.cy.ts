/// <reference types="cypress" />

describe("Login", () => {
  const username = "novak";
  const password = "novak123";

  beforeEach(() => {
    cy.visit("/login");
  });

  it("should display the login form", () => {
    cy.get("form").should("exist");
    cy.get("input[name='username']").should("exist");
    cy.get("input[name='password']").should("exist");
    cy.get("button[type='submit']").should("exist");
  });

  it("should require username and password", () => {
    cy.get("button[type='submit']").click();
    cy.get("form").contains("Username is required"); // Adjust this to whatever the actual error message is
    cy.get("form").contains("Your password should have at least 3 characters"); // Adjust this to whatever the actual error message is
  });

  it("should show an error message for incorrect credentials", () => {
    cy.get("input[name='username']").type("wrongusername");
    cy.get("input[name='password']").type("wrongpassword");
    cy.get("button[type='submit']").click();
    cy.contains("Login failed, please try again later!").should("be.visible");
  });

  it("should login successfully and redirect to articles page", () => {
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);
    cy.get("button[type='submit']").click();
    cy.url({ timeout: 25000 }).should("include", "/my-articles"); // Update "/my-articles" to whatever your articles page URL is
  });
});
