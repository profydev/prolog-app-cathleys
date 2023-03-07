context("Landing page test", () => {
  describe("Hero section", () => {
    it("displays the hero page", () => {
      const title = "Your Application Issues In Sight. At All Times.";

      cy.visit("http://localhost:3000");

      cy.get("h1").contains(title);
      cy.get("span").should("be.visible");
      cy.get("div").find('[data-cy="hero-image"]').should("be.visible");
    });
  });

  describe("Social Proof Section", () => {
    it("displays the social proof ", () => {
      const text = "Join 4,000+ companies using Prolog";

      cy.visit("http://localhost:3000");

      cy.get('[data-cy="social-div"]').contains(text);

      cy.get("div").find('[data-cy="company-logos"]').should("have.length", 6);
    });
  });
});
