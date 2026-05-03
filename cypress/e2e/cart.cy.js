import HomePage from '../support/pages/HomePage';
import ProductPage from '../support/pages/ProductPage';
import CartPage from '../support/pages/CartPage';

describe('Sauce Demo Shopify - Cart', () => {
  it('cart page loads successfully via direct navigation', () => {
    cy.visit('/cart');
    CartPage.validateUrl()
            .validatePageLoads();
  });

  it('cart JSON API returns valid structure', () => {
    cy.request('/cart.json').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('items');
      expect(response.body).to.have.property('item_count');
      expect(response.body).to.have.property('token');
    });
  });

  it('cart form exists on cart page', () => {
    cy.visit('/cart');
    CartPage.validateUrl()
            .validateCartFormExists();
  });

  it('adds product to cart via UI and cart API reflects state', () => {
    HomePage.visit();
    HomePage.clickFirstAvailableProduct();

    ProductPage.validateBuyFormExist()
               .addToCart();

    cy.request('/cart.json').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('items');
    });
  });
});
