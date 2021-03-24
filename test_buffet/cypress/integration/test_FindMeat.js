describe('FindListMeat', () => {
    it('test9', () => {
      cy.visit('http://localhost:3000/admin/meatmanage')
      cy.get('[name=input-search]').clear().type('เนื้อวากิว')
      cy.get('[name=btn-subsearch]').click()
    })

    it('test10', () => {
        cy.visit('http://localhost:3000/admin/meatmanage')
        cy.get('[name=btn-seltype]').click()
        cy.get('name_type-${id}') //* เนื้อหมู *//
      })
  })