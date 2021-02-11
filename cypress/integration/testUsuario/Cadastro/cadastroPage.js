/// <reference types="cypress" />

import CadastroElements from '../Cadastro/CadastroElements'
const cadastroElements = new CadastroElements
const url = "https://www.toroinvestimentos.com.br"

class CadastroPage {

    acessarSite() {
        cy.visit(url),
        cy.title().should('be.equal', 'Home | Toro Investimentos')
    }

    clicarBotaoCadastrar() {
     //   cy.get(cadastroElements.botaoCadastrar).click()
        cy.get('.navbar__buttons > .d-lg-none').click()
    }

    preencherNome() {
        cy.get(cadastroElements.campoNome()).type('teste')
    }

    preencherEmail() {
        cy.get(cadastroElements.campoEmail()).type('teste')
    }

    preencherCPF() {
        cy.get(cadastroElements.campoCPF()).type('46093860892')
    }

    preencherSenha() {
        cy.get(cadastroElements.campoSenha()).type('teste1234')
    }
}
export default CadastroPage;