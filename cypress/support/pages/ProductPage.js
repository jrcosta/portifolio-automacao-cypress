class ProductPage {
  // --- Mapeamento de Elementos (Locators) ---
  element = {
    addToCartForm: () => cy.get('form[action*="/cart/add"]'),
    submitButtons: () => cy.get('form[action*="/cart/add"] button[type="submit"], form[action*="/cart/add"] input[type="submit"]'),
    productTitle: () => cy.get('h1').first(),
    productPrice: () => cy.get('[class*="price"]').first(),
    productImages: () => cy.get('img').filter('[src*="cdn.shopify"]')
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

  validateProductTitle() {
    this.element.productTitle()
      .should('be.visible')
      .invoke('text')
      .should('have.length.greaterThan', 0);
    return this;
  }

  validateProductPrice() {
    this.element.productPrice().should('be.visible');
    return this;
  }

  validateProductImages() {
    this.element.productImages().should('have.length.greaterThan', 0);
    return this;
  }

  addToCart() {
    this.element.submitButtons().first().click();
    return this;
  }
}

export default new ProductPage();
