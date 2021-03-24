describe('Test scenario : CheckBill', () => {
    it('test3', () => {
      cy.visit('http://localhost:3000/welcome/1')
      cy.get('.btn-checkbill').click()
    })
  })