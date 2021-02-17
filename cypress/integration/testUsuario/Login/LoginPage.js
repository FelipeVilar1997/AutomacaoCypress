/// <reference types="cypress" />

import LoginElements from '../Login/LoginElements'
const loginElements = new LoginElements
const url = "https://app.toroinvestimentos.com.br"

class LoginPage {
    acessarSite() {
         cy.visit(url)
         cy.screenshot(console.log('Valida pagina de Login!'))
    }

    preencherLogin() {
        cy.get(loginElements.campoCPF()).type('46093860892')
        cy.screenshot(console.log('Preenche campo login'))
    }

    preencherSenha() {
        cy.get(loginElements.campoSenha()).type('Teste1234'),
        cy.screenshot(console.log('Preenche campo senha'))
    }

    clicarEntrar() {
        cy.get(loginElements.botaoContinue()).click()
        cy.screenshot(console.log('Clica no botão Continue'))
    }

    validaTelaHome() {
        cy.get(loginElements.nomeTelaHome).should('contains', 'Felipe'),
        cy.screenshot(console.log('Valida tela Home'))
    }
}
export default LoginPage;

