describe("Register Account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("FT_LOGIN_1:  Log in by sign in a new account", () => {
    cy.visit("/sign-up");
    cy.get("#Email").type("vvtest1@gmail.com", { force: true });
    cy.get("#Name").type("vvtest1", { force: true });
    cy.get("#select1").select("Female");
    cy.get("#Age").type("20", { force: true });
    cy.get("#select2").select("Thailand");
    cy.get("#Password").type("password", { force: true });
    cy.get("#Confirm-Password").type("password", { force: true });
    cy.get("#form_auth").submit();
  });

  it("FT_LOGIN_2:  Log in by sign in a new account but wrong email format", () => {
    cy.visit("/sign-up");
    cy.get("#Email").type("vvtest1", { force: true });
    cy.get("#Name").type("vvtest1", { force: true });
    cy.get("#select1").select("Female");
    cy.get("#Age").type("20", { force: true });
    cy.get("#select2").select("Thailand");
    cy.get("#Password").type("password", { force: true });
    cy.get("#Confirm-Password").type("password", { force: true });
    cy.get("#form_auth").submit();
    cy.url().should("eq", "http://localhost:4001/sign-up"); // still on sign up page
  });
});

describe("Login Account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("FT_LOGIN_3:  Log in by having an account", () => {
    cy.visit("/");
    cy.get("#Email").type("vvtest@gmail.com", { force: true });
    cy.get("#password").type("password", { force: true });
    cy.get("#form_auth").submit();
  });

  it("FT_LOGIN_4:  Log in by having an account but invalid email or password", () => {
    cy.visit("/");
    cy.get("#Email").type("vvtest@gmail.com", { force: true });
    cy.get("#password").type("passwordkkk", { force: true });
    cy.get("#form_auth").submit();
    cy.get("#swal2-title").should("contain", "Password or Email is wrong");
  });
});
