describe({{name}}, () => {
    it('Opens the DACI application', () => {
        cy.viewport(1900, 800);
        // Need to visit the localhost:3000 (DACI app) page
        cy.visit('http://localhost:3000')
    })
})