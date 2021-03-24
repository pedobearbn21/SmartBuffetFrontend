describe('AddListMeat', () => {
    it('test7', () => {
      cy.visit('http://localhost:3000/admin/meatmanage')
      cy.get('[name=btn-addMeat]').click()
      cy.get('[name=btn-Upload]').click()
      // cy.addImage('./images/Meat.jpeg') //** ติดรูป
      cy.get('[name=input-NameMeat]').type('เนื้อหมู')
      cy.get('[name=btn-Type]') //** เลือกประเภท
      cy.get('[name=input-NumDish]').clear().type('20')
      cy.get('[name=input-price]').clear().type('40')
      cy.get('[name=btn-SaveMeat]').click()
    })

    it('test8', () => {
        cy.visit('http://localhost:3000/admin/meatmanage')
        cy.get('cardmeat-${id}').click()
        cy.get('[name=input-NumDish]').clear().type('50')
        cy.get('[name=btn-SaveMeat]').click()
      })
  })