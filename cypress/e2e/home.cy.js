describe("Home page detail", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('#Email').type('cypress_testing@cypress.com');
        cy.get('#password').type('cypress123');

        cy.get('#button_auth').click();
    });

    it("FT_HOME_1: Can see Upcoming Detail", () => {
        cy.get('.upcoming')
        .should('exist') 
    });

    it("FT_HOME_2: Can go to the Upcoming Detail page", () => {
        cy.get('.upcoming-title')
            .should('exist') 
            .click();

        cy.url().should('include', '/upcoming'); 
    });

    it("FT_HOME_3: Can see sport result", () => {
        cy.get(".sport-result-card")
        .should('exist')
    })

    it("FT_HOME_3: Can go to sport result page", () => {
        cy.get("#root > div.homepage > div.section-2 > div.news-section > div.result-box > div > a > h1")
        .should('exist')
        .click()

        cy.url().should('include', '/subscribe'); 
    })

    it("FT_HOME_4: Can subscribe sport from Homepage", () => {
        cy.wait(1000);
        cy.visit("/subscribe");
        cy.get("#root > div.subscribes > div.sport-bar > div > div > div:nth-child(1)").should("not.exist")

        cy.visit("/");
        cy.get("#Tennis")
        .click()

        cy.visit("/subscribe");
        cy.get("#root > div.subscribes > div.sport-bar > div > div > div:nth-child(1)").should("exist")
        cy.get("#root > div.subscribes > div.sport-bar > div > div > div:nth-child(1) > p").should("contain.text", "Tennis")
    })
});


describe("Homepage Sport Search", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get('#Email').type('cypress_testing@cypress.com');
        cy.get('#password').type('cypress123');

        cy.get('#button_auth').click();
    });

    it("FT_HOME_5: Can search sport", () => {
        cy.get("#scroll-sport-section > div:nth-child(3) > div.sport-name")
        .should('not.have.text', 'Badminton');

        cy.get('#scroll-sport-section > div.search-sport > input[type=text]')
        .type('Badminton')
        
        cy.get("#scroll-sport-section > div:nth-child(3) > div.sport-name")
        .should('contain.text', 'Badminton');
    });


});
