class ProductService {
  // --- Camada de Requisição à API ---
  getProductsJson(limit = 3) {
    return cy.request(`/products.json?limit=${limit}`);
  }

  // --- Validações e Contratos ---
  validateProductsSchema(response) {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('products');
    expect(response.body.products.length).to.be.greaterThan(0);
    expect(response.body.products[0]).to.have.property('title');
  }
}

export default new ProductService();
