describe("Badge Status", () => {
  const statusWord = ["Critical", "Warning", "Stable"];
  const statusColors = ["#B42318", "#B54708", "#027A48"];

  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("correct number of badges", () => {
      cy.get("main")
        .find("ul>li")
        .should(($li) => {
          expect($li).to.have.length(3);
        });
    });
    it("shows the correct badge status", () => {
      cy.get("main")
        .find("ul>li")
        .each(($el, index) => {
          cy.wrap($el)
            .contains(statusWord[index])
            .invoke("val", statusColors[index]);
        });
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });
    it("correct number of badges", () => {
      cy.get("main")
        .find("ul>li")
        .should(($li) => {
          expect($li).to.have.length(3);
        });
    });
    it("shows the correct badge status", () => {
      cy.get("main")
        .find("ul>li")
        .each(($el, index) => {
          cy.wrap($el)
            .contains(statusWord[index])
            .invoke("val", statusColors[index]);
        });
    });
  });
});
