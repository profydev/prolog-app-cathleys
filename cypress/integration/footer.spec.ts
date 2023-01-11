describe("Footer", () => {
  it("shows the footer", () => {
    cy.visit("http://localhost:3000/dashboard");

    cy.get(".footer").find('[data-cy="version"]').should("be.visible");
    cy.get(".footer").find("a").should("have.length", 4);
    cy.get(".footer").find("img").should("be.visible");
  });
});
