context('Properties Panel', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Go to panel', () => {
    it('should() -  go to panel through jumbotron button', () => {
      cy.get('.btn-primary').click();
      cy.location('pathname').should('include', 'properties')
    })

    it('should() - go to panel through navbar', () => {
      cy.get('.nav-links')
        .contains('Propiedades')
        .click();

        cy.location('pathname').should('include', 'properties')
    })
  })
})