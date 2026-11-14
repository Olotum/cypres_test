describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/loja')
    cy.get('#login').click();
    cy.get('[name="usuario"]').click();
    cy.get('[name="usuario"]').type('cliente');
    cy.get('[name="senha"]').type('cliente{enter}');
    cy.get('button.swal2-confirm').click();
    cy.get('#h5-nome-produto-7').click();
    cy.get('#carrinho').click();
    cy.get('button.swal2-confirm').click();
    cy.get('#finalizar').click();
    cy.get('button.swal2-confirm').click();
    cy.get('#link-vitrine').click();
    cy.get('#link-compras').click();
    cy.get('#link-voltar-vitrine').click();
    cy.get('#link-sair').click();
    cy.get('button.swal2-confirm').click();
    cy.get('button.swal2-confirm').click();
  })
})