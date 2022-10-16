describe("loads the page", () => {
  it("shows the loading spinner", () => {
    cy.intercept("https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
      delayMs: 3000,
    });

    cy.visit("http://localhost:3000/dashboard");
    cy.get(".loading-screen-style__Container-sc-82d1c511-0").should(
      "be.visible"
    );
    cy.get(".loading-screen-style__Container-sc-82d1c511-0").should(
      "not.exist"
    );
    cy.get("main").find("li").should("have.length", 3);
  });
});