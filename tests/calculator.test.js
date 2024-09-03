// tests/calculator.test.js

const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator', () => {
    test('should add two numbers correctly', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(37, -73)).toBe(-36);
        expect(add(3.141593, 2)).toBeCloseTo(5.141593, 5);
    });

    test('should multiply two numbers correctly', () => {
        expect(multiply(5, 2)).toBe(10);
        expect(multiply(3, -73)).toBe(-219);
        expect(multiply(0, 0)).toBe(0);
    });

    test('should subtract two numbers correctly', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(37, -73)).toBe(110);
    });

    test('should divide two numbers correctly', () => {
        expect(divide(5, 2)).toBe(2.5);
        expect(divide(37, -7)).toBeCloseTo(-5.2857, 4);
    });

    test('should throw error for division by zero', () => {
        expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
});