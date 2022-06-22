$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosLoginUseDataFromDB.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios bank and cash new account functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DBFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 2093276600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to login with valid credentials and create a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-create-a-new-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@DBScenario1"
    },
    {
      "line": 4,
      "name": "@Smoke"
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
  "name": "User enters \"username\" from Techfios database",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"password\" from Techfios database",
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
formatter.match({
  "location": "NewAccountStepsDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 909194900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_from_Techfios_database(String)"
});
formatter.result({
  "duration": 1894716000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "NewAccountStepsDefinition.user_enters_from_Techfios_database(String)"
});
formatter.result({
  "duration": 1622197800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2780789800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountStepsDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 8150700,
  "status": "passed"
});
});