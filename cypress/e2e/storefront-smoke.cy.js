describe('Sauce Demo Shopify - Smoke', () => {
  it('loads homepage and shows core storefront elements', () => {
    cy.request('/').its('status').should('eq', 200);

    cy.visit('/');

    cy.location('host').should('include', 'sauce-demo.myshopify.com');
    cy.title().should('contain', 'Sauce Demo');

    cy.get('body').should('be.visible').invoke('text').then((text) => {
      expect(text).to.match(/Products|Enter using password|Catalog|Shop/i);
    });
  });
});
