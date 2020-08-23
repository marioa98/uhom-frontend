import faker from "faker";

context('Go to login form', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  describe('User login', () => {
    it('Valid login', () => {
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
        .should(() => {
          const user = JSON.parse(localStorage.getItem('user'))
          expect(user.email).to.eq(email)
        })

    })

    it('Invalid login', () => {
      const email = faker.internet.email();
      const password = faker.internet.password();

      cy.get('.btn-login').click();

      cy.get('input[placeholder="Email"]')
        .type(email)
        .should('have.value', email)

      cy.get('input[placeholder="Contraseña"]')
        .type(password)
        .should('have.value', password)
      
      cy.get('button[type="submit"]')
        .click()

      cy.get('.dark-error')
        .should('have.text', 'La combinación de email y contraseña es incorrecta')
    })
  })
})