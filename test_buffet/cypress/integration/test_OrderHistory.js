describe('Test scenario : OrderHistory', () => {
    it('test4', () => {
      cy.visit('http://localhost:3000/welcome/1')
      cy.get('.btn-order-history').click()
    })
  })