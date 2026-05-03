class ProductService {
  // --- Camada de Requisição à API ---
  getProductsJson(limit = 3) {
    return cy.request(`/products.json?limit=${limit}`);
  }

  getCollectionsJson(limit = 3) {
    return cy.request(`/collections.json?limit=${limit}`);
  }

  // --- Validações e Contratos ---
  validateProductsSchema(response) {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('products');
    expect(response.body.products.length).to.be.greaterThan(0);
    expect(response.body.products[0]).to.have.property('title');
  }

  validateFullProductSchema(response) {
    expect(response.status).to.eq(200);
    const product = response.body.products[0];
    expect(product).to.have.property('id');
    expect(product).to.have.property('title');
    expect(product).to.have.property('handle');
    expect(product).to.have.property('variants');
    expect(product.variants).to.be.an('array').with.length.greaterThan(0);
    expect(product.variants[0]).to.have.property('price');
    expect(product).to.have.property('images');
  }

  validateCollectionsSchema(response) {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('collections');
    expect(response.body.collections).to.be.an('array').with.length.greaterThan(0);
    expect(response.body.collections[0]).to.have.property('id');
    expect(response.body.collections[0]).to.have.property('handle');
    expect(response.body.collections[0]).to.have.property('title');
  }
}

export default new ProductService();
