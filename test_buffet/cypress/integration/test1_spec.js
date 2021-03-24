describe('AddMeat', () => {
    it('test1', () => {
      cy.visit('http://localhost:3000/welcome/1')
      cy.get('[name=btn-order]').click()
      cy.get('cardmeat-${id}').click()
      cy.get('[name=btn-pickmeat]').click()
      for (var i = 0; i < 3; i++) {
        cy.get("[.btn-delete" + i + "]").click()
      }
      cy.get('[name=btn-pushorder]').click()
    })
  })