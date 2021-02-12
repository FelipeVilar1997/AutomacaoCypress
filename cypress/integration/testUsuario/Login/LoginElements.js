/// <reference types="cypress" />

class LoginElements {
    campoCPF = () => {return '#username'}
    campoSenha = () => {return '#password'}
    botaoContinue = () => {return '.modal-panel-footer--fixed > .btn'}
    nomeTelaHome = () => {return 'h5'}
}
export default LoginElements;