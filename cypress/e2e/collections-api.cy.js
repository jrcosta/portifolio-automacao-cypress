import ProductService from '../support/services/ProductService';

describe('Sauce Demo Shopify - Collections API', () => {
  it('returns collections list with valid schema', () => {
    ProductService.getCollectionsJson(3).then((response) => {
      ProductService.validateCollectionsSchema(response);
    });
  });

  it('returns product data with complete field schema including variants and images', () => {
    ProductService.getProductsJson(1).then((response) => {
      ProductService.validateFullProductSchema(response);
    });
  });

  it('product variants contain price as string', () => {
    ProductService.getProductsJson(1).then((response) => {
      const variant = response.body.products[0].variants[0];
      expect(variant.price).to.be.a('string');
      expect(parseFloat(variant.price)).to.be.greaterThan(0);
    });
  });

  it('products endpoint respects limit param', () => {
    const limit = 2;
    ProductService.getProductsJson(limit).then((response) => {
      expect(response.body.products.length).to.be.at.most(limit);
    });
  });
});
