describe('Sauce Demo Shopify - Products API', () => {
  it('returns product data from storefront JSON endpoint', () => {
    cy.request('/products.json?limit=3').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('products');
      expect(response.body.products.length).to.be.greaterThan(0);
      expect(response.body.products[0]).to.have.property('title');
    });
  });
});
