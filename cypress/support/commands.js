// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// In future i will use it
// import Decryption from "../utilities/decryption";

// Cypress.Commands.add("logintab", (email, password) => {
//   cy.get("span.MuiButton-label:contains('Login')").click();
//   let decodeEmailId = Decryption.decoderdData(`{user}+ _EMAIL`);
//   cy.get("#emailOrMobile").type(decodeEmailId);
//   let decodePassword = Decryption.decoderdData("PATIENT_PASSWORD");
//   cy.get("#password").type(decodePassword);
//   cy.get("form span.MuiButton-label").click();
//   cy.wait(1000);
// });
