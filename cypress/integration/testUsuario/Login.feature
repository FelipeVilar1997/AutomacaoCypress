Feature: Toro Investimentos Login

  Eu como novo usuario cadastrado quero
  fazer login para operar na bolsa de valores
    
  Scenario: Realizar login
    Given estou na tela de login
    When preencho o login com meu cpf
    When preencho o campo senha 
    When clico em entrar
    Then valido meu nome na tela pós login 