/// <reference types="cypress" />

import CadastroElements from './CadastroElements'
const cadastroElements = new CadastroElements
const url = "https://www.toroinvestimentos.com.br"

class CadastroPage {

    acessarSite() {
        cy.visit(url),
        cy.title().should('be.equal', 'Home | Toro Investimentos')
        cy.screenshot(console.log('Valida tela Home'))
    }

    clicarBotaoCadastrar() {
        cy.get(cadastroElements.botaoCadastrar()).click()
        cy.screenshot(console.log('Clica no botão cadastrar'))
    }

    preencherNome() {  
        cy.get(cadastroElements.campoNome()).type('Felipe Vilar')
        cy.screenshot(console.log('Preenche o campo nome'))
    }    
    

    preencherEmail() {
        cy.get(cadastroElements.campoEmail()).type('felipe.bvilar@gmail.com')
        cy.screenshot(console.log('Preenche o campo email'))
    }

    preencherCPF() {
        cy.get(cadastroElements.campoCPF()).type('46093860892')
        cy.screenshot(console.log('Preenche o campo CPF'))
    }

    preencherSenha() {
        cy.get(cadastroElements.campoSenha()).type('Teste1234')
        cy.screenshot(console.log('Preenche o campo senha'))
    }

    clicarBtnContinue() {
        cy.get(cadastroElements.botaoContinue()).click()
        cy.screenshot(console.log('Clica no botão continue'))
    }
}
export default CadastroPage;