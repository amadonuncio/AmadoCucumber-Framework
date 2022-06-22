@DBFeature @Regression
Feature: TechFios bank and cash new account functionality 

  @DBScenario1 @Smoke
  Scenario: User should be able to login with valid credentials and create a new account 
  	Given User is on techfios login page
    When User enters "username" from Techfios database
    When User enters "password" from Techfios database
    When User clicks signin button
    Then User should land on dashboard page
