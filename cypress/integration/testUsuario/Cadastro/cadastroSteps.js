import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CadastroPage from './CadastroPage';
const cadastroPage = new CadastroPage


Given(/^Eu abro o site Toro Investimentos$/, () => {
	cadastroPage.acessarSite();
});

When(/^clico em cadastrar$/, () => {
	cadastroPage.clicarBotaoCadastrar();
});

When(/^informo meu nome$/, () => {
	cadastroPage.preencherNome();
});

When(/^informo meu email$/, () => {
	cadastroPage.preencherEmail();
});

When(/^informo meu cpf$/, () => {
	cadastroPage.preencherCPF();
});

When(/^informo uma senha$/, () => {
	cadastroPage.preencherSenha();
});

Then(/^clico em continue$/, () => {
	cadastroPage.clicarBtnContinue();
});
