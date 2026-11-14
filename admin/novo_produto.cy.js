describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost/loja-admin')
    cy.get('[name="usuario"]').click();
    cy.get('[name="usuario"]').type('admin');
    cy.get('[name="senha"]').type('admin{enter}');
    cy.get('button.swal2-confirm').click();
    cy.get('#produtos').click();
    cy.get('#link-novo-produto').click();
    cy.get('[name="nome"]').click();
    cy.get('[name="nome"]').type('Gemeos');
    cy.get('[name="descricao"]').click();
    cy.get('[name="descricao"]').type('irmãos gemeos');
    cy.get('[name="preco"]').click();
    cy.get('[name="preco"]').type('10000000');
    cy.get('[name="imagem"]').click();
    cy.get('[name="imagem"]').type('https://t.ctcdn.com.br/cZhyA5M7V_Qssiftm3wRkTPpsx8=/1024x576/smart/i426108.jpeg');
    cy.get('#btn-cadastrar').click();
    cy.get('#sair').click();
    cy.get('button.swal2-confirm').click();
    cy.get('button.swal2-confirm').click();
  })
})