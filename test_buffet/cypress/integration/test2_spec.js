describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('http://localhost:3000/welcome/1')
      cy.get('.btn-order').click()
      cy.get('cardmeat-${id}').click()
      cy.get('.btn-pickmeat').click()
      for (var i = 0; i < 10; i++) {
        cy.get("[.btn-delete" + i + "]").click()
      }
      cy.get('.btn-pushorder').click()
    })
  })