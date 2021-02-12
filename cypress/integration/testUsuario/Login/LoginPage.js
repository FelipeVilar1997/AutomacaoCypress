/// <reference types="cypress" />

import LoginElements from '../Login/LoginElements'
const loginElements = new LoginElements
const url = "https://app.toroinvestimentos.com.br"

class LoginPage {
    acessarSite() {
         cy.visit(url)
         console.log('Valida pagina de Login!')
    }

    preencherLogin() {
        cy.get(loginElements.campoCPF()).type('46093860892')
        console.log('Preenche campo login')
    }

    preencherSenha() {
        cy.get(loginElements.campoSenha()).type('Teste1234')
        console.log('Preenche campo senha')
    }

    clicarEntrar() {
        cy.get(loginElements.botaoContinue()).click()
        console.log('Clica no botão Continue')
    }

    validaTelaHome() {
//        cy.get(loginElements.validaTelaHome()).should('be.equal', ' Oi, Felipe! ')
        cy.get('h5').should('contain', 'Felipe')
        console.log('Valida tela Home')
    }
}
export default LoginPage;

