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

describe('add each item to cart', () => {

    it('Visit checkout app', () => {
        cy.visit('http://localhost:3000');
    })

    let totalPrice = 0;

    products.map((item) => (
        it('Add ' + item.name + ' to cart', () => {
            cy.get('.btn-' + item.name).click();

            cy.get('.items').find('.carted-' + item.name).should('contain.text', item.name);
            cy.get('.items').find('.quantity-' + item.name).should('contain.text', '1 x £' + item.price);

            totalPrice += item.price;
        })
    ))

    it('Check the item total price is correct', () => {
        cy.get('.itemsPriceRow').find('.itemsPrice').should('contain.text', totalPrice);
    })

})
