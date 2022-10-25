describe("Popup Modal", () => {
  context("Popup modal onClick", () => {
    it("opens the modal on contact button ", () => {
      cy.visit("http://localhost:3000");
      cy.get('[data-cy="contact-button"]').click();
      cy.get(".popup-content").find("img");
      cy.get(".popup-content").find("h1");
      cy.get(".popup-content").find("p");
    });

    it("closes the modal on cancel button", () => {
      cy.get('[data-cy = "cancel-button"]').click();
    });

    it("opens mailto", () => {
      cy.visit("http://localhost:3000");
      cy.get('[data-cy="contact-button"]').click();

      cy.contains("Open Email App").invoke("attr", "href");
    });
  });
});
