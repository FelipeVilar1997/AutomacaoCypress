import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from './LoginPage';
const loginPage = new LoginPage


Given(/^estou na tela de login$/, () => {
	loginPage.acessarSite();
});

When(/^preencho o login com meu cpf$/, () => {
	loginPage.preencherLogin();
});

When(/^preencho o campo senha$/, () => {
	loginPage.preencherSenha();
});

When(/^clico em entrar$/, () => {
	loginPage.clicarEntrar();
});

Then(/^valido meu nome na tela pós login$/, () => {
	loginPage.validaTelaHome();
});
