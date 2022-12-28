describe("Hero section", () => {
  it("displays the hero page", () => {
    const title = "Your Application Issues In Sight. At All Times.";

    cy.visit("http://localhost:3000");

    cy.get("h1").contains(title);
    cy.get("span").should("be.visible");
    cy.get("div").find("img").should("be.visible");
  });
});
