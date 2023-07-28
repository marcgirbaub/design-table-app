describe("When navigation to the designs page", () => {
  it("Then it should show a table with the titles Name, Courses, Machine Name, Last Updated and Machine Width", () => {
    cy.visit("/setouts");

    cy.intercept("GET", "/setouts", { fixture: "setouts.json" });

    cy.contains("Name");
    cy.contains("Machine Name");
    cy.contains("Machine Width");
    cy.contains("Last Updated");
    cy.contains("Courses");
  });

  it("Then it should show a design with the name `1st Setout` and machine width `130`", () => {
    cy.visit("/setouts");

    cy.intercept("GET", "/setouts", { fixture: "setouts.json" });

    cy.contains("1st Setout");
    cy.contains("130");
  });
});
