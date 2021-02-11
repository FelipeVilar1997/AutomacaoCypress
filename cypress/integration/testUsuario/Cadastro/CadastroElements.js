/// <reference types="cypress" />

class CadastroElements {
    botaoCadastrar = () => { return 'a[class="d-none btn btn-outline-primary btn-sm d-lg-flex"]' }
    campoNome = () => {return '#name'}
    campoEmail = () => {return '#email'}
    campoCPF = () => {return '#cpfcnpj'}
    campoSenha = () => {return '#password'}
}
export default CadastroElements;