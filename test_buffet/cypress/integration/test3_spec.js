describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('http://localhost:3000/welcome/1')
      cy.get('.btn-checkbill').click()
      cy.get('.btn-successbill').click()
    })
  })