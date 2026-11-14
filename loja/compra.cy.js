describe('Primeiro Site', () => {
    it('Passes', () => {
        cy.visit('http://localhost/loja');
        cy.get('#login')
        .should('be.visible')
        .click();
        cy.get('#usuario')
        .should('be.visible')
        .type('vanda');
        cy.get('#senha')
        .should('be.visible')
        .type('vanda');	
        cy.get('#submit')
        .should('be.visible')
        .click();	
        cy.contains('OK').click();
        cy.get('#img-produto-51').click();
        cy.get('#icone-cart-plus-51').click();
        cy.get('button.swal2-confirm').click();
        cy.get('#finalizar').click();
        cy.get('button.swal2-confirm').click();
        cy.get('#link-sair').click();
        cy.get('button.swal2-confirm').click();
        cy.get('button.swal2-confirm').click();
    });
    });

   