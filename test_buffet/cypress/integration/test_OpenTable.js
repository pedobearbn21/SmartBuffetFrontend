describe('Opentable', () => {
    it('test5', () => {
      cy.visit('http://localhost:3000/admin/opentable')
      cy.get('input').clear().type('3') // ***
    })
  })