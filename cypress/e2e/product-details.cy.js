import HomePage from '../support/pages/HomePage';
import ProductPage from '../support/pages/ProductPage';

describe('Sauce Demo Shopify - Product Details', () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.clickFirstAvailableProduct();
    ProductPage.validateUrl();
  });

  it('shows product title on product page', () => {
    ProductPage.validateProductTitle();
  });

  it('shows product price on product page', () => {
    ProductPage.validateProductPrice();
  });

  it('shows product images from Shopify CDN', () => {
    ProductPage.validateProductImages();
  });

  it('shows add to cart form with submit button', () => {
    ProductPage.validateBuyFormExist();
  });
});
