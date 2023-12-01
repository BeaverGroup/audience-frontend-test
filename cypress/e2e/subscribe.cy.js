describe("Subscribe/Unsubscribe sport", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#Email").type("vvtest@gmail.com", { force: true });
        cy.get("#password").type("password", { force: true });
        cy.get("#form_auth").submit();
        cy.get("#scroll-sport-section > div:nth-child(3)").click();
    })

    it("FT_SUB_1: Can see all sport result that subscribe in subscribe page", () => {
        cy.visit("/subscribe");
        cy.get("#root > div.subscribes > div.sport-bar > div > div > div:nth-child(1) > p").should("contain", "Archery")
        cy.get("#root > div.subscribes > div.sport-result-medal > div > table > tr:nth-child(2) > td.sport-result-table-name > p").should("contain", "ARCHERY")
    })

    it("FT_SUB_2: Can unsubscribe a speciftic sport", ()=> {
        cy.get("#scroll-sport-section > div:nth-child(4)").click();
        cy.visit("/subscribe");
        cy.get("#root > div.subscribes > div.sport-bar > div > div > div:nth-child(2) > svg.icon-x.iconify.iconify--octicon").click()
        cy.get("#root > div.subscribes > div.sport-bar > div > div > div").should('have.length', 1) 
    })
})