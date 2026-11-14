describe('template spec', () => {
  it('passes', () => {
	cy.visit('http://localhost/loja-admin')
	
		cy.wait(1000);
		cy.get('#usuario')
		.should('be.visible')
		.type('admin');
	
		cy.wait(1000);
		cy.get('#senha')
		.should('be.visible')
		.type('admin');
		
		cy.wait(1000);
		cy.get('#submit')
		.should('be.visible')
		.click();
		
		cy.wait(1000);
		cy.contains('OK').click();
		
		cy.wait(1000);
		cy.get('#produtos')
		.should('be.visible')
		.click();
		
		cy.wait(1000);
		cy.get('#produto21')
		.should('be.visible')
		.click();
		
		cy.wait(1000);
		cy.get('#url')
		.should('be.visible')
		.type('https://m.media-amazon.com/images/I/71jW8O3-H-L._AC_SY300_SX300_QL70_ML2_.jpg');
		
		cy.wait(1000);
		cy.get('#salvar')
		.should('be.visible')
		.click();
		
		cy.wait(1000);
		cy.get('#sair')
		.should('be.visible')
		.click();
		
		cy.wait(1000);
		cy.contains('Deslogar!').click();
		
		cy.wait(1000);
		cy.contains('OK').click();
		
  })
});

it('Meu Perfil', function() {});