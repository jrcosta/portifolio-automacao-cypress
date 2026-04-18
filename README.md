# portifolio-automacao-cypress

Demo E2E com **Cypress** para validar o storefront: `https://sauce-demo.myshopify.com/`.

## Cenários implementados

- **Smoke da Home** (`storefront-smoke.cy.js`)
  - Carrega a home
  - Valida título da página
  - Valida presença de produtos

- **Navegação de Produto** (`product-page.cy.js`)
  - Acessa o primeiro produto disponível
  - Valida URL de produto
  - Valida formulário de compra (`/cart/add`)

- **Products API** (`products-api.cy.js`)
  - Valida endpoint `/products.json`
  - Garante retorno de produtos

## Pré-requisitos

- Node.js 20+

## Instalação

```bash
npm install
```

## Executar testes

Modo interativo:

```bash
npm run cy:open
```

Modo headless (todos):

```bash
npm run cy:run
```

Smoke rápido (1 spec):

```bash
npm run cy:run:smoke
```

## Estrutura

```text
cypress/
  e2e/
    storefront-smoke.cy.js
    product-page.cy.js
    products-api.cy.js
  support/
    commands.js
    e2e.js
cypress.config.js
package.json
```
