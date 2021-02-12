Feature: Toro Investimentos Cadastro

  Eu como novo usuario quero me cadastrar
  para operar na bolsa de valores

  Scenario: Realizar novo cadastro
    Given Eu abro o site Toro Investimentos
    When clico em cadastrar
    When informo meu nome
    When informo meu email
    When informo meu cpf
    When informo uma senha
    Then clico em continue
