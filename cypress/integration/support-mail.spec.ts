describe("Support Mail", () => {
  it("opens the sidebar", () => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
  });

  it("opens the mail app", () => {
    cy.get("nav")
      .contains("Support")
      .click()
      .find("a")
      .should(
        "have attr",
        "href",
        "mailto:support@prolog-app.com?subject='Support Request:'"
      );
  });
});
