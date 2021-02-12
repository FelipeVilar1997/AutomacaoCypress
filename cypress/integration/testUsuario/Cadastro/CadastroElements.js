/// <reference types="cypress" />

class CadastroElements {
    botaoCadastrar = () => {return '.navbar__buttons > .d-lg-none'}
    campoNome = () => {return '#name'}
    campoEmail = () => {return '#email'}
    campoCPF = () => {return '#cpfcnpj'}
    campoSenha = () => {return '#password'}
    botaoContinue = () => {return '.register-actions > .btn'}
}
export default CadastroElements;