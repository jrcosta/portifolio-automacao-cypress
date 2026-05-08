# Repository Guidelines

## Project Structure & Module Organization

This submodule contains Cypress E2E tests for the Sauce Demo Shopify storefront.

- `cypress/e2e/`: test specs such as smoke, product page, and products API checks.
- `cypress/support/`: shared Cypress support files and custom commands.
- `cypress.config.js`: Cypress configuration.
- `package.json`: npm scripts and Cypress dependencies.

## Build, Test, and Development Commands

```bash
npm install
npm run cy:open
npm run cy:run
npm run cy:run:smoke
```

`cy:open` starts interactive Cypress. `cy:run` executes all specs headlessly. `cy:run:smoke` runs the smoke spec only.

## Coding Style & Naming Conventions

Write specs as `*.cy.js` under `cypress/e2e`. Use clear scenario names in `describe` and `it`. Keep selectors stable and prefer visible user behavior over implementation details.

## Testing Guidelines

Each spec should validate one coherent journey or API behavior. Keep setup inside Cypress hooks only when shared across tests. Avoid fixed waits; use Cypress retries and assertions instead.

## Commit & Pull Request Guidelines

Use concise imperative commits, for example `Add cart navigation test`. Pull requests should include tested scenario names, the command run, and screenshots or videos when a UI behavior changes.

## External Site Notes

The suite targets `https://sauce-demo.myshopify.com/`. If tests fail, confirm the storefront is reachable and has not changed markup or product data before modifying assertions.
