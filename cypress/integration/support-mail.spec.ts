describe("Support Mail", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });

    it("opens the mail app", () => {
      cy.get("nav").contains("Support").click({ force: true });
    });
  });
});
