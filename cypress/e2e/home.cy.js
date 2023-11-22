describe("Home page detail", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('#Email').type('cypress_testing@cypress.com');
      cy.get('#password').type('cypress123');

      cy.get('#button_auth').click();
    });
  
    it("Can see Upcoming Detail", () => {
        cy.get('.upcoming')
        .should('exist') 
    });

    // it("Can go to the Upcoming Detail page", () => {
    //     cy.get('.upcoming')
    //         .should('exist') 
    //         .click();

    //     cy.url().should('include', '/upcoming'); 
    // });

    it("Can see sport result", () => {
        cy.get(".sport-result-card")
        .should('exist')
    })

    // it("Can go to sport result page", () => {
    //     cy.get(".sport-result-card")
    //     .should('exist')
    //     .click()

    //     cy.url().should('include', '/subscribe'); 
    // })

    // it("Can subscribe sport from Homepage", () => {

    //     cy.get("#Tennis")
    //     .click()
    // })
  });



  describe("Homepage Sport Search", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('#Email').type('cypress_testing@cypress.com');
      cy.get('#password').type('cypress123');

      cy.get('#button_auth').click();
    });
  
    it("Can search sport", () => {
        cy.get("#scroll-sport-section > div:nth-child(3) > div.sport-name")
        .should('not.have.text', 'Badminton');

        cy.get('#scroll-sport-section > div.search-sport > input[type=text]')
        .type('Badminton')
        
        cy.get("#scroll-sport-section > div:nth-child(3) > div.sport-name")
        .should('contain.text', 'Badminton');
    });


  });



  