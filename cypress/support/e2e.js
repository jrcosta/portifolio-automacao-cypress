import "allure-cypress";
import './commands';
Cypress.on('uncaught:exception', (err) => {
  const ignoredErrors = [
    'ResizeObserver loop limit exceeded',
    "Unexpected token '<'",
    'Script error.',
    '$injector:modulerr',
    '$injector:nomod',
  ];

  if (ignoredErrors.some((message) => err.message.includes(message))) {
    return false;
  }

  return true;
});
