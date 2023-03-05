/// <reference types="cypress" />

const locators = {
    PRODUTOS: {
        VENDA_UM: ':nth-child(2) > .row-fluid > :nth-child(3) > .listagem-item > .produto-sobrepor',        
        VENDA_DOIS: ':nth-child(2) > .row-fluid > :nth-child(1) > .listagem-item > .produto-sobrepor',        
        VENDA_TRES: ':nth-child(3) > .row-fluid > :nth-child(2) > .listagem-item > .produto-sobrepor',
        VENDA_QUATRO: ':nth-child(2) > .row-fluid > :nth-child(2) > .listagem-item > .produto-sobrepor'
    },

    BOTAO: {
        BOTAO_UM: 'div.principal > .acoes-produto > .comprar > .botao',
        BOTAO_DOIS: 'div.principal > .acoes-produto > .comprar > .botao',
        BOTAO_TRES: 'div.principal > .acoes-produto > .comprar > .botao',
        BOTAO_QUATRO: 'div.principal > .acoes-produto > .comprar > .botao',
        RADIO_BUTTON: ':nth-child(2) > .radio > input'
    },

    CUPONS: {
        CUPOM: '#usarCupom',

    },

    VALIDACAO: {
        DESCONTO_UM: '#cupom_desconto',
        ALERTA_DOIS: '.alert-danger',
        VALOR_TOTAL: '.total > .titulo'

    },

    FRETE: {
        FRETE_UM: '#calcularFrete'
    }
}

export default locators;