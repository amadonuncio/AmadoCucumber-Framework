$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosBankAndCashNewAccount.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios bank and cash new account functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to login with valid credentials and create a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks Bank\u0026Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters Account Title as \"\u003cAccountTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"\u003cDescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters Initial Balance as \"\u003cInitialBalance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters Account Number as \"\u003cAccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters Contact Person as \"\u003cContactPerson\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"\u003cPhone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters Internet Banking URL as \"\u003cInternetBankingURL\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "AccountTitle",
        "Description",
        "InitialBalance",
        "AccountNumber",
        "ContactPerson",
        "Phone",
        "InternetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checkings",
        "Buying things",
        "100.00",
        "1939",
        "Amado Nuncio",
        "888888888",
        "amado.edu"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2335769900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and create a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Feature"
    },
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks Bank\u0026Cash button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters Account Title as \"Checkings\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters Description as \"Buying things\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters Initial Balance as \"100.00\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters Account Number as \"1939\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters Contact Person as \"Amado Nuncio\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters Phone as \"888888888\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters Internet Banking URL as \"amado.edu\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks submit button",
  "keyword": "And "
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1142092200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 1636144300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 1604120000,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2246904500,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 15324100,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_clicks_Bank_Cash_button()"
});
formatter.result({
  "duration": 1584046500,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_clicks_New_Account_button()"
});
formatter.result({
  "duration": 1807997900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkings",
      "offset": 30
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_Account_Title_as(String)"
});
formatter.result({
  "duration": 1611423400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buying things",
      "offset": 28
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_Description_as(String)"
});
formatter.result({
  "duration": 1614665300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 32
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_Initial_Balance_as(int)"
});
formatter.result({
  "duration": 1604495700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1939",
      "offset": 31
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_Account_Number_as(int)"
});
formatter.result({
  "duration": 1598331300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amado Nuncio",
      "offset": 31
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_Contact_Person_as(String)"
});
formatter.result({
  "duration": 1642594700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "888888888",
      "offset": 22
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_Phone_as(int)"
});
formatter.result({
  "duration": 1593287300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amado.edu",
      "offset": 37
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_Internet_Banking_URL_as(String)"
});
formatter.result({
  "duration": 1619455100,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_clicks_submit_button()"
});
formatter.result({
  "duration": 2594472700,
  "status": "passed"
});
});