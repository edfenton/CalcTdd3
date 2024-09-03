const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { add, subtract, multiply, divide } = require('../../calculator');

let firstNumber, secondNumber, result;

Given('the first number is {float}', function (number) {
    firstNumber = number;
});

Given('the second number is {float}', function (number) {
    secondNumber = number;
});

When('I add the numbers', function () {
    result = add(firstNumber, secondNumber);
});

When('I subtract the numbers', function () {
    result = subtract(firstNumber, secondNumber);
});

When('I multiply the numbers', function () {
    result = multiply(firstNumber, secondNumber);
});

When('I divide the numbers', function () {
    result = divide(firstNumber, secondNumber);
});

Then('the result should be {float}', function (expectedResult) {
    assert.strictEqual(result, expectedResult);
});