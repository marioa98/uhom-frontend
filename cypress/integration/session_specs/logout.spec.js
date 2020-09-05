import faker from "faker";

context('Delete session', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Clear localStorage after logout', () => {
    const email = 'johndoe@gmail.com'
      cy.get('.btn-login').click();

      cy.get('input[placeholder="Email"]')
        .type(email)
        .should('have.value', email)
      
      cy.get('input[placeholder="Contraseña"]')
        .type('12345678')
        .should('have.value', '12345678')
      
      cy.get('button[type="submit"]')
        .click()

      cy.location('pathname')
        .should('include', 'properties')
      
  })
})