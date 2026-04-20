import HomePage from '../support/pages/HomePage';

describe('Sauce Demo Shopify - Smoke', () => {
  it('loads homepage and shows core storefront elements', () => {
    // Valida integridade do backend respondendo (Service wrapper omitido pois é simplificado aqui)
    cy.request('/').its('status').should('eq', 200);

    // Usa a Page Object da Home
    HomePage.visit()
            .validateStorefrontLoad();
  });
});
