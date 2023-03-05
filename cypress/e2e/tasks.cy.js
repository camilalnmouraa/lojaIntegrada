/// <reference types="cypress" />

import loc from '../support/commands'
import locators from '../support/locators'


describe('cupom', () => {
    before(() => {
        cy.home()
    })

    it('Aplicar cupom válido com sucesso', () => {
        cy.get(locators.PRODUTOS.VENDA_UM).click()
        cy.get(locators.BOTAO.BOTAO_UM).click()
        cy.get(locators.CUPONS.CUPOM).type('10OFF')
        cy.contains('button', 'Usar cupom').click()
        cy.get(locators.VALIDACAO.DESCONTO_UM).should('be.visible')
    })

    it('Aplicar cupom inválido', () => {
        cy.home()
        cy.get(locators.PRODUTOS.VENDA_DOIS).click()
        cy.get(locators.BOTAO.BOTAO_DOIS).click()
        cy.get(locators.CUPONS.CUPOM).type('CUPOMINVALIDO')
        cy.contains('button', 'Usar cupom').click()
        cy.get(locators.VALIDACAO.ALERTA_DOIS).should('be.visible')
    })

    it('Aplicar cupom expirado', () => {
        cy.home()
        cy.get(locators.PRODUTOS.VENDA_TRES).click()
        cy.get(locators.BOTAO.BOTAO_TRES).click()
        cy.get(locators.CUPONS.CUPOM).type('CUPOMVENCIDO')
        cy.contains('button', 'Usar cupom').click()
        cy.get(locators.VALIDACAO.ALERTA_DOIS).should('be.visible')
        cy.get(locators.VALIDACAO.VALOR_TOTAL).should('contain', 'R$ 180,00')

    })

    it('Aplicar cupom acima do limite de uso', () => {
        cy.home()
        cy.get(locators.PRODUTOS.VENDA_QUATRO).click()
        cy.get(locators.BOTAO.BOTAO_QUATRO).click()
        cy.get(locators.CUPONS.CUPOM).type('20LIMITADO')
        cy.contains('button', 'Usar cupom').click()
        cy.get(locators.VALIDACAO.ALERTA_DOIS).should('be.visible')
        cy.get(locators.VALIDACAO.VALOR_TOTAL).should('contain', 'R$ 128,00')
    })

    it('Aplicar cupom de desconto apenas no frete', () => {
        cy.home()
        cy.get(locators.PRODUTOS.VENDA_UM).click()
        cy.get(locators.BOTAO.BOTAO_UM).click()
        cy.get(locators.FRETE.FRETE_UM).type('52071260')
        cy.contains('button', 'Calcular')
        cy.get(locators.BOTAO.RADIO_BUTTON).click()
        cy.get(locators.CUPONS.CUPOM).type('FRETEGRATIS')
        cy.contains('button', 'Usar cupom').click()
        cy.get(locators.VALIDACAO.VALOR_TOTAL).should('contain', 'R$ 100,00')
    })
})