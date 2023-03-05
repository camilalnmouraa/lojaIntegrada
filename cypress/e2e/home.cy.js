/// <reference types="cypress" />


describe('home', () => {
  it('Versão Web deve estar online', () => {
    cy.visit('https://qastoredesafio.lojaintegrada.com.br/')

    cy.title().should('eq', 'QA Store Desafio')
  })
})