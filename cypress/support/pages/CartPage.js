class CartPage {
  // --- Mapeamento de Elementos (Locators) ---
  element = {
    cartForm: () => cy.get('form[action="/cart"]'),
    emptyMessage: () => cy.get('body')
  };

  // --- Ações da Página ---
  validateUrl() {
    cy.location('pathname').should('include', '/cart');
    return this;
  }

  validatePageLoads() {
    cy.get('body').should('be.visible');
    cy.title().should('have.length.greaterThan', 0);
    return this;
  }

  validateCartFormExists() {
    this.element.cartForm().should('exist');
    return this;
  }
}

export default new CartPage();
