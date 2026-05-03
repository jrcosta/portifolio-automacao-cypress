import HomePage from '../support/pages/HomePage';
import ProductPage from '../support/pages/ProductPage';

describe('Sauce Demo Shopify - Product navigation', () => {
  it('navigates to a product page and validates buy form', () => {
    // 1. Visita a Home
    HomePage.visit();

    // 2. Transição de Página (Clica e vai para o produto)
    HomePage.clickFirstAvailableProduct();

    // 3. Valida a nova tela ativa usando PO respectivo
    ProductPage.validateUrl()
               .validateBuyFormExist();
  });
});
