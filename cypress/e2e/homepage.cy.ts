/// <reference types="cypress" />

describe("Homepage", () => {
  context("When there are no articles", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://fullstack.exercise.applifting.cz/articles", {
        items: [],
      }).as("fetchArticles");
      cy.visit("/");
      cy.wait("@fetchArticles");
    });

    it("should display an error message", () => {
      cy.get("p").should("contain", "Ooops, there are no articles");
    });
  });

  context("When articles are available", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://fullstack.exercise.applifting.cz/articles", {
        items: [
          {
            articleId: "1",
            imageId: "/img.png",
            title: "Why Do Cats Have Whiskers?",
            perex:
              " A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon",
            createdAt: "2023-07-31T17:40:43.9882855Z",
            lastUpdatedAt: "2023-07-31T17:40:43.9882855Z",
          },
          {
            articleId: "2",
            imageId: "/img.png",
            title: "Why Do Cats Eat Lasagnas?",
            perex:
              "A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon A cat's whiskers — or vibrissae — are a well-hon",
            createdAt: "2023-07-31T17:40:43.9882855Z",
            lastUpdatedAt: "2023-07-31T17:40:43.9882855Z",
          },
        ],
      }).as("fetchArticles");
      cy.visit("/");
      cy.wait("@fetchArticles");
    });

    it("should display the articles", () => {
      cy.get('[data-testid="article-title"]').should(
        "contain",
        "Why Do Cats Have Whiskers?",
      );
      cy.get('[data-testid="article-title"]').should(
        "contain",
        "Why Do Cats Eat Lasagnas?",
      );
    });
  });
});
