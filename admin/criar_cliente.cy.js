describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost/loja-admin')
    cy.get('[name="usuario"]').click();
    cy.get('[name="usuario"]').type('admin');
    cy.get('[name="senha"]').type('admin{enter}');
    cy.get('button.swal2-confirm').click();
    cy.get('#link-acessar-usuarios').click();
    cy.get('#link-novo-usuario').click();
    cy.get('[name="usuario"]').click();
    cy.get('[name="usuario"]').type('Vanda');
    cy.get('[name="senha"]').click();
    cy.get('[name="senha"]').type('vanda');
    cy.get('#btn-cadastrar-usuario').click();
    cy.get('#link-nav-sair').click();
    cy.get('button.swal2-confirm').click();
    cy.get('button.swal2-confirm').click();
  })
})