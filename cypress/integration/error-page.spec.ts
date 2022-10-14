describe("Error Page", () => {
  context("Error", () => {
    it("simulates an error when dashboard cannot be displayed", () => {
      cy.intercept(
        {
          method: "GET",
          url: "https://prolog-api.profy.dev/project",
        },
        {
          forceNetworkError: true,
        }
      ).as("getNetworkFailure");

      cy.visit("http://localhost:3000/dashboard");
      cy.wait("@getNetworkFailure");
      cy.wait(10000);
      cy.get(".error-style__Container-sc-87a2b9f7-0").should("be.visible");
    });
  });
});
