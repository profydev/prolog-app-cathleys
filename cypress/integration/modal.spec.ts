describe("Popup Modal", () => {
  beforeEach("Opens the modal on button click", () => {
    cy.visit("http://localhost:3000");
    cy.get(`[data-cy="contact-button"]`).click();
  });

  it("Closes modal on cancel", () => {
    cy.contains("Cancel").click();
  });
  it("Opens email client", () => {
    cy.contains("Open Email App").invoke("attr", "href");
  });
});
