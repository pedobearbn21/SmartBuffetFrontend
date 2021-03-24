describe('FixListMeat', () => {
    it('test8', () => {
      cy.visit('http://localhost:3000/admin/meatmanage')
      cy.get('cardmeat-${id}').click()
      cy.get('[name=input-NumDish]').clear().type('50')
      cy.get('[name=btn-SaveMeat]').click()
    })
  })