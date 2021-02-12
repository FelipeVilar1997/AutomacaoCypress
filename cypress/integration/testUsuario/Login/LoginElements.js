/// <reference types="cypress" />

class LoginElements {
    campoCPF = () => {return '#username'}
    campoSenha = () => {return '#password'}
    botaoContinue = () => {return '.modal-panel-footer--fixed > .btn'}
    nomeTelaHome = () => {return '[class=header-title]'}
    validaLogin = () => {return 'Toro Investimentos - A melhor experiência digital de investimentos'}
}
export default LoginElements;