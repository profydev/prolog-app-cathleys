import mockIssues1 from "../fixtures/issues-page-1.json";
import mockIssues2 from "../fixtures/issues-page-2.json";
import mockIssues3 from "../fixtures/issues-page-3.json";

describe("Issue List", () => {
  beforeEach(() => {
    // setup request mocks
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");
    cy.intercept(
      "GET",
      "https://prolog-api.profy.dev/v2/issue?page=1&status=&level=&project=",
      {
        fixture: "issues-page-1.json",
      }
    ).as("getIssues");
    cy.intercept(
      "GET",
      "https://prolog-api.profy.dev/v2/issue?page=2&status=&level=&project=",
      {
        fixture: "issues-page-2.json",
      }
    );
    cy.intercept(
      "GET",
      "https://prolog-api.profy.dev/v2/issue?page=3&status=&level=&project=",
      {
        fixture: "issues-page-3.json",
      }
    );

    // open issues page
    cy.visit(`http://localhost:3000/dashboard/issues`);

    // wait for request to resolve
    cy.wait("@getProjects");
    cy.wait("@getIssues");

    // set button aliases
    cy.get('[data-cy="Previous"]', { timeout: 10000 }).as("prev-button");
    cy.get("button").contains("Next").as("next-button");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the issues", () => {
      cy.get("main")
        .find('[data-cy="tbody"]')
        .find('[data-cy="tr"]')
        .each(($el, index) => {
          const issue = mockIssues1.items[index];
          const firstLineOfStackTrace = issue.stack.split("\n")[1].trim();
          cy.wrap($el).contains(issue.name);
          cy.wrap($el).contains(issue.message);
          cy.wrap($el).contains(issue.numEvents);
          cy.wrap($el).contains(issue.numUsers);
          cy.wrap($el).contains(firstLineOfStackTrace);
        });
    });

    it("paginates the data", () => {
      // test first page
      cy.contains("Page 1 of 3");
      cy.get("@prev-button").should("have.attr", "disabled");

      // test navigation to second page
      cy.get("@next-button").click();
      cy.get("@prev-button").should("not.have.attr", "disabled");
      cy.contains("Page 2 of 3");
      cy.get('[data-cy="tbody"] [data-cy="tr"]:first').contains(
        mockIssues2.items[0].message
      );

      // test navigation to third and last page
      cy.get("@next-button").click();
      cy.get("@next-button").should("have.attr", "disabled");
      cy.contains("Page 3 of 3");
      cy.get('[data-cy="tbody"] [data-cy="tr"]:first').contains(
        mockIssues3.items[0].message
      );

      // test navigation back to second page
      cy.get("@prev-button").click({ force: true });
      cy.get("@next-button").should("not.have.attr", "disabled");
      cy.contains("Page 2 of 3");
      cy.get('[data-cy="tbody"] [data-cy="tr"]:first').contains(
        mockIssues2.items[0].message
      );
    });

    it("persists page after reload", () => {
      cy.get("@next-button").click();
      cy.contains("Page 2 of 3");

      cy.reload();
      cy.contains("Page 2 of 3");
    });
  });
});
