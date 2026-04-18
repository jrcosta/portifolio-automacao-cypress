describe('Sauce Demo Shopify - Product navigation', () => {
  it('navigates to a product page and validates buy form', () => {
    cy.visit('/');

    cy.getFirstProductLink()
      .should('have.attr', 'href')
      .then((href) => {
        cy.visit(href);
      });

    cy.location('pathname').should('include', '/products/');
    cy.get('form[action*="/cart/add"]').should('exist');
    cy.get('form[action*="/cart/add"] button[type="submit"], form[action*="/cart/add"] input[type="submit"]')
      .should('have.length.greaterThan', 0);
  });
});
