class ProductPage {
  // --- Mapeamento de Elementos (Locators) ---
  element = {
    addToCartForm: () => cy.get('form[action*="/cart/add"]'),
    submitButtons: () => cy.get('form[action*="/cart/add"] button[type="submit"], form[action*="/cart/add"] input[type="submit"]')
  };

  // --- Ações da Página ---
  validateUrl() {
    cy.location('pathname').should('include', '/products/');
    return this;
  }

  validateBuyFormExist() {
    this.element.addToCartForm().should('exist');
    this.element.submitButtons().should('have.length.greaterThan', 0);
    return this;
  }
}

export default new ProductPage();
