describe("Vote sport", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#Email").type("vvtest@gmail.com", { force: true });
        cy.get("#password").type("password", { force: true });
        cy.get("#form_auth").submit();
        cy.get("#scroll-sport-section > div:nth-child(3)").click();
    })
    it("FT_VOTE_1: Can vote team that you think will win", ()=> {
        cy.visit("/upcoming")
        cy.get("#root > div.upcoming-page > div.upcoming-section > div > div:nth-child(2) > div.each-day-list > div").click()
        cy.get("#match-detail > div.match-poll-box > div > div:nth-child(1)").click()
        cy.get("#match-detail > div.match-poll-box > div > div").not('.change-background').should('have.length', 3)
    })
    it("FT_VOTE_1: Can't vote in second time", ()=> {
        cy.visit("/upcoming")
        cy.get("#root > div.upcoming-page > div.upcoming-section > div > div:nth-child(2) > div.each-day-list > div").click()
        cy.get("#match-detail > div.match-poll-box > div > div:nth-child(1)").click()
        cy.get("#match-detail > div.match-poll-box > div > div:nth-child(2)").click()
        cy.get("#match-detail > div.match-poll-box > div > div.participant.change-background").should("contain", "Japan")
        })
})