/// <reference types="cypress" />

import CadastroElements from './CadastroElements'
const cadastroElements = new CadastroElements
const url = "https://www.toroinvestimentos.com.br"

class CadastroPage {

    acessarSite() {
        cy.visit(url),
        cy.title().should('be.equal', 'Home | Toro Investimentos')
    }

    clicarBotaoCadastrar() {
        cy.get(cadastroElements.botaoCadastrar()).click()
    }

    preencherNome() {
        cy.fixture('dadosCliente').as('usuario').then(() => {  
        cy.get(cadastroElements.campoNome()).type(this.usuario.nome)     
    //    cy.get(cadastroElements.campoNome()).type('Felipe Vilar')
    })    
    }

    preencherEmail() {
        cy.get(cadastroElements.campoEmail()).type('felipe.bvilar@gmail.com')
    }

    preencherCPF() {
        cy.get(cadastroElements.campoCPF()).type('46093860892')
    }

    preencherSenha() {
        cy.get(cadastroElements.campoSenha()).type('Teste1234')
    }

    clicarBtnContinue() {
        cy.get(cadastroElements.botaoContinue()).click()
    }
}
export default CadastroPage;