/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import data from "../../../src/data";

const products = data.products;
const mac = products.find(element => element.name === "MacBook");

describe('Should check 10% discount when purchasing 2 MacBook', () => {

    it('Visit checkout app', () => {
        cy.visit('http://localhost:3000');
    })

    it('Click MacBook twice to activate discount', () => {
        cy.get('.btn-MacBook').click()
        cy.get('.btn-MacBook').click()
    })

    it('Check that a discount has been applied when 2 MacBooks are added', () => {
        // cy.get('.discountRow').find('discountOff').should('contain.text', 280);
        cy.get('.discount').find('.discountRow').find('.discountOff').should('contain.text', (mac.price * 2) * 0.10);
    })

})
