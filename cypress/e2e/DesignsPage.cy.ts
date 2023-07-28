describe("When navigation to the designs page", () => {
  it("Then it should show a table with the titles Name, Courses, Wales, Last Updated and By", () => {
    cy.visit("/designs");

    cy.intercept("GET", "/designs", { fixture: "designs.json" });
    cy.intercept("GET", "/users", { fixture: "users.json" });

    cy.contains("Name");
    cy.contains("Courses");
    cy.contains("Wales");
    cy.contains("Last Updated");
    cy.contains("By");
  });

  it("Then it should show a design with the name `18th Design` and wales `350`", () => {
    cy.visit("/designs");

    cy.intercept("GET", "/designs", { fixture: "designs.json" });
    cy.intercept("GET", "/users", { fixture: "users.json" });

    cy.contains("18th Design");
    cy.contains("350");
  });
});
