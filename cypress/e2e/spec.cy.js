describe("Login/Register Account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Log in by sign in a new account", () => {
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

  it("Log in by sign in a new account but wrong email format", () => {
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

  it("Log in by having an account", () => {
    cy.visit("/");
    cy.get("#Email").type("vvtest@gmail.com", { force: true });
    cy.get("#password").type("password", { force: true });
    cy.get("#form_auth").submit();
  });

  it("Log in by having an account but invalid email or password", () => {
    cy.visit("/");
    cy.get("#Email").type("vvtest@gmail.com", { force: true });
    cy.get("#password").type("passwordkkk", { force: true });
    cy.get("#form_auth").submit();
    cy.get("#swal2-title").should("contain", "Password or Email is wrong");
  });

  // it("Log in by Google Account", () => {
  //   cy.visit("/");
  //   cy.get("#container_auth_button > div").click();
  //   cy.origin("https://accounts.google.com/", () => {
  //     cy.get("#identifierId").type(Cypress.env('google_email'))
  //   });
  // });
});

describe("Subscribe/Unsubscribe sport", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#Email").type("vvtest@gmail.com", { force: true });
    cy.get("#password").type("password", { force: true });
    cy.get("#form_auth").submit();
    cy.get("#scroll-sport-section > div:nth-child(3)").click();
  })

  it("Can see all sport result that subscribe in subscribe page", () => {
    cy.visit("/subscribe");
    cy.get("#root > div.subscribes > div.sport-bar > div > div > div:nth-child(1) > p").should("contain", "Archery")
    cy.get("#root > div.subscribes > div.sport-result-medal > div > table > tr:nth-child(2) > td.sport-result-table-name > p").should("contain", "ARCHERY")
  })

  it("Can unsubscribe a speciftic sport", ()=> {
    cy.get("#scroll-sport-section > div:nth-child(4)").click();
    cy.visit("/subscribe");
    cy.get("#root > div.subscribes > div.sport-bar > div > div > div:nth-child(2) > svg.icon-x.iconify.iconify--octicon").click()
    cy.get("#root > div.subscribes > div.sport-bar > div > div > div").should('have.length', 1) 
  })
})

describe("Vote sport", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#Email").type("vvtest@gmail.com", { force: true });
    cy.get("#password").type("password", { force: true });
    cy.get("#form_auth").submit();
    cy.get("#scroll-sport-section > div:nth-child(3)").click();
  })
  it("Can vote team that you think will win", ()=> {
    cy.visit("/upcoming")
    cy.get("#root > div.upcoming-page > div.upcoming-section > div > div:nth-child(2) > div.each-day-list > div").click()
    cy.get("#match-detail > div.match-poll-box > div > div:nth-child(1)").click()
    cy.get("#match-detail > div.match-poll-box > div > div").not('.change-background').should('have.length', 3)
  })
  it("Can't vote in second time", ()=> {
    cy.visit("/upcoming")
    cy.get("#root > div.upcoming-page > div.upcoming-section > div > div:nth-child(2) > div.each-day-list > div").click()
    cy.get("#match-detail > div.match-poll-box > div > div:nth-child(1)").click()
    cy.get("#match-detail > div.match-poll-box > div > div:nth-child(2)").click()
    cy.get("#match-detail > div.match-poll-box > div > div.participant.change-background").should("contain", "Japan")
  })
})