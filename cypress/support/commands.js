Cypress.Commands.add('getFirstProductLink', () => {
  return cy
    .get('a[href*="/products/"]', { timeout: 20000 })
    .filter(':visible')
    .first();
});
