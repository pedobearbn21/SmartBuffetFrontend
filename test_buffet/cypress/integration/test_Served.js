describe('Served', () => {
    it('test6', () => {
      cy.visit('http://localhost:3000/welcome/:id/historyorder')
      cy.get('[name=btn-ordernum]').click() // *** โต๊ะ
      cy.get('[name=btn-served]').click() // *** เสิร์ฟ
    })
  })