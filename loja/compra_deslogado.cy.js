describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost/loja')
    cy.get('#icone-sem-foto-6').click();
    
    cy.get('#div-card-form-6 button.fw-semibold').click();
    cy.contains('Ir para o Login').click();
    
    cy.get('[name="usuario"]').click();
    cy.get('[name="usuario"]').type('cliente');
    
    cy.get('[name="senha"]').click();
    cy.get('[name="senha"]').type('cliente');
    cy.get('#submit').click();
    cy.get('button.swal2-confirm').click();
    cy.get('#div-sem-foto-6').click();
    cy.get('#carrinho').click();
    cy.get('button.swal2-confirm').click();
    cy.get('#finalizar').click();
    cy.get('button.swal2-confirm').click();
    cy.get('#link-sair').click();
    cy.get('button.swal2-confirm').click();
    cy.get('button.swal2-confirm').click();
  })
})