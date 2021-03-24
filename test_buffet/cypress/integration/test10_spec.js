describe('FindMeat', () => {
    it('test10', () => {
      cy.visit('http://localhost:3000/admin/meatmanage')
      cy.get('[name=btn-seltype]').click()
      cy.get('name_type-${id}') //* เนื้อหมู *//
    })
  })