// type definitions for Cypress object "cy"
/// <reference types="cypress" />



describe("Home Page Test", () => {
  beforeEach(() => {
    cy.visit("/home");
  });

  it("Home page check valid url", () => {
    cy.url().should("include", "/home");
  });


  it("Home page check  data", () => {
       cy.contains("Ankara");

  });

   it("Home page check add data", () => {
    cy.get('[data-test="searchTestInput"]').type("Kayseri");
    cy.get('[data-test="searchTestButton"]').click();
    cy.wait(500);

    cy.contains("Kayseri");
   
  });
});
