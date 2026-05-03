class HomePage {
  // --- Mapeamento de Elementos (Locators) ---
  element = {
    productLink: () => cy.get('a[href*="/products/"]', { timeout: 20000 }),
    bodyText: () => cy.get('body')
  };

  // --- Ações da Página ---
  visit() {
    cy.visit('/');
    return this;
  }

  validateStorefrontLoad() {
    cy.location('host').should('include', 'sauce-demo.myshopify.com');
    cy.title().should('contain', 'Sauce Demo');

    this.element.bodyText()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/Products|Enter using password|Catalog|Shop/i);
      });
      
    return this;
  }

  clickFirstAvailableProduct() {
    this.element.productLink()
      .filter(':visible')
      .first()
      .should('have.attr', 'href')
      .then((href) => {
        cy.visit(href);
      });
  }
}

export default new HomePage();
