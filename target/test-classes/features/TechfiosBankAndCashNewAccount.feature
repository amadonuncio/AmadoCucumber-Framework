@Feature
Feature: TechFios bank and cash new account functionality 

  @Scenario1
  Scenario Outline: User should be able to login with valid credentials and create a new account 
  	Given User is on techfios login page
    When User enters username as "<username>"
    When User enters password as "<password>"
    When User clicks signin button
    Then User should land on dashboard page
    And User clicks Bank&Cash button
    When User clicks New Account button
    Then User enters Account Title as "<AccountTitle>"
    Then User enters Description as "<Description>"
    Then User enters Initial Balance as "<InitialBalance>"
    Then User enters Account Number as "<AccountNumber>"
    Then User enters Contact Person as "<ContactPerson>"
    Then User enters Phone as "<Phone>"
    Then User enters Internet Banking URL as "<InternetBankingURL>"
    And User clicks submit button

    Examples: 
      | username  | password | AccountTitle | Description | InitialBalance |  AccountNumber |  ContactPerson |  Phone |  InternetBankingURL |
      | demo@techfios.com | abc123 | Checkings | Buying things | 100.00 | 1939 | Amado Nuncio | 888888888 | amado.edu |
