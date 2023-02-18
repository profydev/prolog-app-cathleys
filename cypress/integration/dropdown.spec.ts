describe("Issue Filters", () => {
  context("desktop resolution", () => {
    beforeEach(() => {
      cy.visit(`http://localhost:3000/dashboard/issues`);
    });

    it("selects the status dropdown", () => {
      //add input for the react-select to work
      cy.get(".status__control")
        .click()
        .get(".status__menu-list")
        .find("#react-select-status-dropdown-value-option-1")
        .contains("Unresolved")
        .click();

      cy.get(".status__control")
        .click()
        .get(".status__menu-list")
        .find("#react-select-status-dropdown-value-option-2")
        .contains("Resolved")
        .click();

      cy.get(".status__control")
        .click()
        .get(".status__menu-list")
        .find("#react-select-status-dropdown-value-option-0")
        .contains("--")
        .click();
    });

    it("selects the level dropdown", () => {
      cy.get(".level__control")
        .click()
        .get(".level__menu-list")
        .find("#react-select-level-dropdown-value-option-1")
        .contains("Error")
        .click();

      cy.get(".level__control")
        .click()
        .get(".level__menu-list")
        .find("#react-select-level-dropdown-value-option-2")
        .contains("Warning")
        .click();

      cy.get(".level__control")
        .click()
        .get(".level__menu-list")
        .find("#react-select-level-dropdown-value-option-3")
        .contains("Info")
        .click();

      cy.get(".level__control")
        .click()
        .get(".level__menu-list")
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

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.visit(`http://localhost:3000/dashboard/issues`);
      cy.viewport(375, 900);
    });

    it("selects the status dropdown", () => {
      //add input for the react-select to work
      cy.get(".status__control")
        .click()
        .get(".status__menu-list")
        .find("#react-select-status-dropdown-value-option-1")
        .contains("Unresolved")
        .click();

      cy.get(".status__control")
        .click()
        .get(".status__menu-list")
        .find("#react-select-status-dropdown-value-option-2")
        .contains("Resolved")
        .click();

      cy.get(".status__control")
        .click()
        .get(".status__menu-list")
        .find("#react-select-status-dropdown-value-option-0")
        .contains("--")
        .click();
    });

    it("selects the level dropdown", () => {
      cy.get(".level__control")
        .click()
        .get(".level__menu-list")
        .find("#react-select-level-dropdown-value-option-1")
        .contains("Error")
        .click();

      cy.get(".level__control")
        .click()
        .get(".level__menu-list")
        .find("#react-select-level-dropdown-value-option-2")
        .contains("Warning")
        .click();

      cy.get(".level__control")
        .click()
        .get(".level__menu-list")
        .find("#react-select-level-dropdown-value-option-3")
        .contains("Info")
        .click();

      cy.get(".level__control")
        .click()
        .get(".level__menu-list")
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
});
