describe('Automation Testing Demo - Login', () => {
  it('deve carregar a pagina inicial e exibir o formulario de login', () => {
    cy.visit('https://demo.automationtesting.in/Index.html', {
      waitUntil: 'domcontentloaded',
    });

    cy.url().should('include', '/Index.html');
    cy.title().should('eq', 'Index');

    cy.get('#email')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'Email id for Sign Up');

    cy.get('#enterimg').should('be.visible');
    cy.get('#btn1').should('be.visible').and('contain.text', 'Sign In');
  });

  it('deve preencher o email, clicar em entrar e carregar a tela de registro', () => {
    cy.visit('https://demo.automationtesting.in/Index.html', {
      waitUntil: 'domcontentloaded',
    });

    cy.get('#email')
      .should('be.visible')
      .type('teste@email.com');

    cy.get('#enterimg')
      .should('be.visible')
      .click();

    cy.url().should('include', '/Register.html');
    cy.get('body > section > div > h2').should('be.visible');
  });

  it('deve preencher o formulario de registro e clicar em Submit', () => {
    const email = `teste${Date.now()}@email.com`;

    cy.visit('https://demo.automationtesting.in/Register.html', {
      waitUntil: 'domcontentloaded',
    });

    cy.get('input[placeholder="First Name"]').type('Joao');
    cy.get('input[placeholder="Last Name"]').type('Silva');
    cy.get('textarea[ng-model="Adress"]').type('Rua Teste, 123');
    cy.get('input[ng-model="EmailAdress"]').type(email);
    cy.get('input[ng-model="Phone"]').type('1198765432');
    cy.get('input[value="Male"]').check();
    cy.get('#checkbox2').check();

    cy.get('#Skills').select('Javascript');
    cy.get('#countries').select('India');
    cy.get('#yearbox').select('1990');
    cy.get('select[ng-model="monthbox"]').select('May');
    cy.get('#daybox').select('10');

    cy.get('#firstpassword').type('Teste123');
    cy.get('#secondpassword').type('Teste123');

    cy.get('#submitbtn')
      .should('be.visible')
      .click();
  });
});
