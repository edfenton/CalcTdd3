Feature: Calculator Operations
  In order to use a simple calculator
  As a user
  I want to be able to add, subtract, multiply, and divide numbers

  Scenario: Adding two numbers
    Given the first number is 1
    And the second number is 2
    When I add the numbers
    Then the result should be 3

  Scenario: Subtracting two numbers
    Given the first number is 5
    And the second number is 2
    When I subtract the numbers
    Then the result should be 3

  Scenario: Multiplying two numbers
    Given the first number is 3
    And the second number is -73
    When I multiply the numbers
    Then the result should be -219

  Scenario: Dividing two numbers
    Given the first number is 10
    And the second number is 2
    When I divide the numbers
    Then the result should be 5