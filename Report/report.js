$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality of adactin application",
  "description": "",
  "id": "login-functionality-of-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 765500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GanishkaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Ganishka0408\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 13917128100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GanishkaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 885546100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka0408",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 467166000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 912120500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_valid_username_and_valid_Password()"
});
formatter.result({
  "duration": 40900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enter \"SowmiyaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter \"Sowmiya05\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 554293800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SowmiyaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 492209800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sowmiya05",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 378403400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 2680834000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_valid_username_and_valid_Password()"
});
formatter.result({
  "duration": 36200,
  "status": "passed"
});
formatter.after({
  "duration": 270200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enter \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 27,
      "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "Sowmi",
        "Sowmi@123"
      ],
      "line": 28,
      "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password;;2"
    },
    {
      "cells": [
        "Ganishka",
        "Gani@234"
      ],
      "line": 29,
      "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password;;3"
    },
    {
      "cells": [
        "suma",
        "suma@567"
      ],
      "line": 30,
      "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GanishkaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Ganishka0408\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 1108914000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GanishkaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 825044700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka0408",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 789877500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1177739300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_valid_username_and_valid_Password()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enter \"Sowmi\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enter \"Sowmi@123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 946001000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sowmi",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 552232500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sowmi@123",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 451157100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1429796600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_valid_username_and_valid_Password()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GanishkaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Ganishka0408\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 908087300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GanishkaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 669069000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka0408",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 471136200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1552828700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_valid_username_and_valid_Password()"
});
formatter.result({
  "duration": 39900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enter \"Ganishka\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enter \"Gani@234\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 921501000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 389029000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gani@234",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 388335100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 859654100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_valid_username_and_valid_Password()"
});
formatter.result({
  "duration": 37100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"GanishkaSri\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Ganishka0408\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 552271900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GanishkaSri",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 508970200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ganishka0408",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 342695700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 799955000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_valid_username_and_valid_Password()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User enter valid username and valid password",
  "description": "",
  "id": "login-functionality-of-adactin-application;user-enter-valid-username-and-valid-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SearchHotel"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launch url of adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enter \"suma\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User enter \"suma@567\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User checks valid username and valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_url_of_adactin_application()"
});
formatter.result({
  "duration": 659068800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suma",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 510330400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suma@567",
      "offset": 12
    }
  ],
  "location": "LoginStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 362052800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 744409900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_checks_valid_username_and_valid_Password()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
});