describe('TesT Scenario:  AddMeat', () => {
    it('TestCase1', () => {
      cy.visit('http://localhost:3000/welcome/1')
      cy.get('.btn-order').click()
      cy.get('cardmeat-${id}').click()
      cy.get('.btn-pickmeat').click()
      for (var i = 0; i < 3; i++) {
        cy.get("[.btn-delete" + i + "]").click()
      }
      cy.get('.btn-pushorder').click()
    })

    it('TestCase2', () => {
      cy.visit('http://localhost:3000/welcome/1')
      cy.get('.btn-order').click()
      cy.get('cardmeat-${id}').click()
      cy.get('.btn-pickmeat').click()
      for (var i = 0; i < 3; i++) {
        cy.get("[.btn-delete" + i + "]").click()
      }
      cy.get('.btn-pushorder').click()
    })

    it('TestCase3', () => {
      cy.visit('http://localhost:3000/welcome/1')
      cy.get('.btn-order').click()
      cy.get('cardmeat-${id}').click()
      cy.get('.btn-pickmeat').click()
      for (var i = 0; i < 3; i++) {
        cy.get("[.btn-delete" + i + "]").click()
      }
      cy.get('.btn-pushorder').click()
    })


  })