describe("React-select dropdowns", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/dashboard/issues`);
  });

  it("selects the status dropdown", () => {
    //add input for the react-select to work
    cy.get(":nth-child(1) > .css-wd1q99-control input")
      .first()
      .type("U")
      .get(".css-1n6sfyn-MenuList")
      .contains("Unresolved")
      .click();

    cy.get(":nth-child(1) > .css-wd1q99-control input")
      .first()
      .type("r")
      .get(".css-1n6sfyn-MenuList")
      .contains("Resolved")
      .click();

    cy.get(":nth-child(1) > .css-wd1q99-control input")
      .click()
      .get(".css-1n6sfyn-MenuList")
      .contains("--")
      .click();
  });

  it("selects the level dropdown", () => {
    cy.get(":nth-child(2) > .css-wd1q99-control input")
      .first()
      .type("e")
      .get(".css-1n6sfyn-MenuList")
      .contains("Error")
      .click();

    cy.get(":nth-child(2) > .css-wd1q99-control input")
      .first()
      .type("w")
      .get(".css-1n6sfyn-MenuList")
      .contains("Warning")
      .click();

    cy.get(":nth-child(2) > .css-wd1q99-control input")
      .click()
      .get(".css-1n6sfyn-MenuList")
      .contains("--")
      .click();
  });

  it("search bar", () => {
    cy.get('[data-cy="search bar"]')
      .type("frontend")
      .should("have.value", "frontend");

    cy.wait(1000);

    cy.get('[data-cy="search bar"]')
      .clear()
      .type("backend")
      .should("have.value", "backend")
      .blur();

    cy.wait(1000);
    cy.get('[data-cy="search bar"]')
      .clear()
      .type("ml service")
      .should("have.value", "ml service")
      .blur();
  });
});
