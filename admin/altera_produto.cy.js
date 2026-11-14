describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost/loja-admin')
    cy.get('[name="usuario"]').click();
    cy.get('[name="usuario"]').type('admin');
    cy.get('[name="senha"]').type('admin{enter}');
    cy.get('button.swal2-confirm').click();
    cy.get('#produtos').click();
    cy.get('#produto2').click();
    cy.get('[name="preco"]').click();
    cy.get('[name="preco"]').clear();
    cy.get('[name="preco"]').type('100');
    cy.get('[name="nome"]').click();
    cy.get('[name="nome"]').clear();
    cy.get('[name="nome"]').type('Mouse com fio dental');
    cy.get('[name="descricao"]').click();
    cy.get('[name="descricao"]').clear();
    cy.get('[name="descricao"]').type('Mouse ergonômico óptico de alta precisão 2000 DPI');
    cy.get('#salvar').click();
    cy.get('#icone-nav-sair').click();
    cy.get('button.swal2-confirm').click();
    cy.get('button.swal2-confirm').click();
  })
})