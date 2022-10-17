describe("loads the page", () => {
  it("shows the loading spinner", () => {
    cy.visit("http://localhost:3000/dashboard");

    cy.get(`[data-cy="loader"]`).should("be.visible");
    cy.get(`[data-cy="loader"]`).should("not.exist");

    cy.get("main").find("li").should("have.length", 3);
  });
});
