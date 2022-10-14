describe("Error Page", () => {
  context("Error", () => {
    const ErrorMsg = "There was a problem while loading the project data";

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
      cy.contains(ErrorMsg).should("be.visible");
    });
  });
});
