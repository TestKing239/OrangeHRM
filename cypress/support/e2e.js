// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-xpath';




  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore errors related to cross-origin scripts
    if (err.message.includes("Script error.") || err.message.includes("cross origin")) {
      return false;
    }
    return true; // Allow other errors to be logged
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("datetimepicker is not a function")) {
      return false; // Ignore the error and continue tests
    }
    return true; // Let Cypress handle other errors
  });