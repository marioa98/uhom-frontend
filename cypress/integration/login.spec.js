context('Go to login form', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  describe('User login', () => {
    it('Valid login', () => {
      cy.get('.btn-login').click();

      cy.get('input[placeholder="Email"]')
        .type('johndoe@gmail.com')
        .should('have.value', 'johndoe@gmail.com')
      
      cy.get('input[placeholder="Contraseña"]')
        .type('12345678')
        .should('have.value', '12345678')
      
      cy.get('button[type="submit"]')
        .click()

      cy.location('pathname').should('include', 'properties')
    })
  })
})