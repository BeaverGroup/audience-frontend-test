describe("", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Log in by sign in a new account", () => {
    cy.visit("/sign-up");
    cy.get("#Email").type("vvtest1@gmail.com", { force: true });
    cy.get("#Name").type("vvtest1", { force: true });
  });
});
