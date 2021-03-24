describe('FindListMeat', () => {
    it('test9', () => {
      cy.visit('http://localhost:3000/admin/meatmanage')
      cy.get('[name=input-search]').clear().type('เนื้อวากิว')
      cy.get('[name=btn-subsearch]').click()
    })
  })