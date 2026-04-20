import ProductService from '../support/services/ProductService';

describe('Sauce Demo Shopify - Products API', () => {
  it('returns product data from storefront JSON endpoint', () => {
    // Isolamento da camada de Request (Service)
    ProductService.getProductsJson(3).then((response) => {
      // Isolamento da camada de Asserts (Schema Validation)
      ProductService.validateProductsSchema(response);
    });
  });
});
