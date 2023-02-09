describe("React-select and search bar", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/dashboard/issues`);
  });

  it("selects the status dropdown", () => {
    //add input for the react-select to work
    cy.get(":nth-child(1) > .css-wd1q99-control input")
      .click({ force: true })
      .get("#react-select-status-dropdown-value-option-1")
      .contains("Unresolved")
      .click();

    cy.get(":nth-child(1) > .css-wd1q99-control input")
      .click({ force: true })
      .get("#react-select-status-dropdown-value-option-2")
      .contains("Resolved")
      .click();

    cy.get(":nth-child(1) > .css-wd1q99-control input")
      .click({ force: true })
      .get("#react-select-status-dropdown-value-option-0")
      .contains("--")
      .click();
  });

  it("selects the level dropdown", () => {
    cy.get(":nth-child(2) > .css-wd1q99-control input")
      .click({ force: true })
      .get(".css-1n6sfyn-MenuList")
      .find("#react-select-level-dropdown-value-option-1")
      .contains("Error")
      .click();

    cy.get(":nth-child(2) > .css-wd1q99-control input")
      .click({ force: true })
      .get(".css-1n6sfyn-MenuList")
      .find("#react-select-level-dropdown-value-option-2")
      .contains("Warning")
      .click();

    cy.get(":nth-child(2) > .css-wd1q99-control input")
      .click({ force: true })
      .get(".css-1n6sfyn-MenuList")
      .find("#react-select-level-dropdown-value-option-3")
      .contains("Info")
      .click();

    cy.get(":nth-child(2) > .css-wd1q99-control input")
      .click({ force: true })
      .get(".css-1n6sfyn-MenuList")
      .find("#react-select-level-dropdown-value-option-0")
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
      .clear()
      .blur();
  });
});
