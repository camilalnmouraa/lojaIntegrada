/// <reference types="cypress" />

import loc from '../support/locators'

Cypress.Commands.add('home', () => {
    cy.visit('https://qastoredesafio.lojaintegrada.com.br/')
    cy.title().should('eq', 'QA Store Desafio')

})