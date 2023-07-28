describe("When nagivating to the home page and clicking on the `Designs` link", () => {
  it("Then the url should contain the `designs` endpoint", () => {
    const urlEndpoint = "designs";

    cy.visit("/");

    cy.get('a[href*="/designs"]').click();

    cy.intercept("GET", "/designs", { fixture: "designs.json" });
    cy.intercept("GET", "/users", { fixture: "users.json" });

    cy.url().should("include", urlEndpoint);
  });

  describe("And clicking in the `Setouts` link", () => {
    it("Then the url should contain the `setouts` endpoint", () => {
      const urlEndpoint = "setouts";

      cy.visit("/designs");

      cy.get('a[href*="/setouts"]').click();

      cy.intercept("GET", "/setouts", { fixture: "setouts.json" });

      cy.url().should("include", urlEndpoint);
    });
  });

  describe("And clicking in the home link", () => {
    it("Then the url should contain the `/` endpoint", () => {
      const urlEndpoint = "/";

      cy.visit("/setouts");

      cy.intercept("GET", "/setouts", { fixture: "setouts.json" });

      cy.get('a[href="/"]').click();

      cy.url().should("include", urlEndpoint);
    });
  });

  describe("And navigating to the /examples endpoint", () => {
    it("Then a 404 text should be shown", () => {
      const urlEndpoint = "/examples";
      const textShown = "404";

      cy.visit(urlEndpoint);

      cy.contains(textShown);
    });
  });
});
