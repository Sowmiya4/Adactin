Feature: Login functionality of adactin application

Background:
    Given User launch url of adactin application
    When User enter "GanishkaSri" as username
    And User enter "Ganishka0408" as password
    And User click login button
    Then User checks valid username and valid Password

@Login
Scenario: User enter valid username and valid password
    Given User launch url of adactin application
    When User enter "SowmiyaSri" as username
    And User enter "Sowmiya05" as password
    And User click login button
    Then User checks valid username and valid Password

@SearchHotel 
Scenario Outline: User enter valid username and valid password
    Given User launch url of adactin application
    When User enter "<username>" as username
    And User enter "<password>" as password
    And User click login button
    Then User checks valid username and valid Password
		
		Examples:
		|username|password|
		|Sowmi|Sowmi@123|
		|Ganishka|Gani@234|
		|suma|suma@567|