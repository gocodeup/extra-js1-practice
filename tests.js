"use strict";

const randomBoolean = Boolean(Math.round(Math.random()));
const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const randomFloatingNumber = Number((Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2));
const randomNegFloatingNumber = Number((-1 * Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2));
const exampleObject = { "firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "Grace Hopper";
const randomIndex = Math.floor(Math.random() * exampleArray.length);
const randomString = exampleArray[randomIndex];

describe('sum', function() {
    describe('core functionality', function() {
        it('should be a defined function', function() {
            expect(typeof sum).toBe('function');
        });
        it('should return a number when passed two numbers', function() {
            expect(typeof sum(2, 3)).toBe('number');
        });
        it('should return the sum of 2 and 3 as 5', function() {
            expect(sum(2, 3)).toBe(5);
        });
        it('should return the sum of ' + randomPositiveNumber + ' and ' + randomNegativeNumber + ' as ' + (randomPositiveNumber + randomNegativeNumber), function() {
            expect(sum(randomPositiveNumber, randomNegativeNumber)).toBe(randomPositiveNumber + randomNegativeNumber);
        });
    });
    describe('validation', function() {
        it('should return false when called with no arguments', function() {
            expect(sum()).toBe(false);
        });
        it('should return false when passed a non-numeric string', function() {
            expect(sum("hello", 2)).toBe(false);
            expect(sum(2, "world")).toBe(false);
        });
        it('should return false when passed a boolean', function() {
            expect(sum(true, 2)).toBe(false);
            expect(sum(2, false)).toBe(false);
        });
        it('should return false when passed an array', function() {
            expect(sum([1, 2], 2)).toBe(false);
            expect(sum(2, [1, 2])).toBe(false);
        });
        it('should return false when passed an object', function() {
            expect(sum({ a: 1, b: 2 }, 2)).toBe(false);
            expect(sum(2, { a: 1, b: 2 })).toBe(false);
        });
    });
});

describe('reverseString', function() {
    describe('core functionality', function() {
        it('should be a defined function', function() {
            expect(typeof reverseString).toBe('function');
        });
        it('should return a string when passed a string', function() {
            expect(typeof reverseString("hello")).toBe('string');
        });
        it('should return the reverse of "hello" as "olleh"', function() {
            expect(reverseString("hello")).toBe("olleh");
        });
        it('should return the reverse of "' + exampleString + '" as "' + exampleString.split('').reverse().join('') + '"', function() {
            expect(reverseString(exampleString)).toBe(exampleString.split('').reverse().join(''));
        });
    });
    describe('validation', function() {
        it('should return false when called with no arguments', function() {
            expect(reverseString()).toBe(false);
        });
        it('should return false when passed a non-string value', function() {
            expect(reverseString(123)).toBe(false);
            expect(reverseString(true)).toBe(false);
        });
        it('should return false when passed an array', function() {
            expect(reverseString([1, 2, 3])).toBe(false);
        });
        it('should return false when passed an object', function() {
            expect(reverseString({ a: 1, b: 2 })).toBe(false);
        });
    });
});

describe('findLargestNumber', function() {
    describe('core functionality', function() {
        it('should be a defined function', function() {
            expect(typeof findLargestNumber).toBe('function');
        });
        it('should return a number when passed an array of numbers', function() {
            expect(typeof findLargestNumber([4, 9, 2, 7, 5])).toBe('number');
        });
        it('should return the largest number in the array [4, 9, 2, 7, 5] as 9', function() {
            expect(findLargestNumber([4, 9, 2, 7, 5])).toBe(9);
        });
        it('should return the largest number in the array [' + randomArray.join(', ') + '] as ' + Math.max(...randomArray), function() {
            expect(findLargestNumber(randomArray)).toBe(Math.max(...randomArray));
        });
    });
    describe('validation', function() {
        it('should return false when called with no arguments', function() {
            expect(findLargestNumber()).toBe(false);
        });
        it('should return false when passed a non-array value', function() {
            expect(findLargestNumber(123)).toBe(false);
            expect(findLargestNumber("hello")).toBe(false);
            expect(findLargestNumber(true)).toBe(false);
            expect(findLargestNumber({ a: 1, b: 2 })).toBe(false);
        });
        it('should return false when passed an array containing non-numeric values', function() {
            expect(findLargestNumber([1, "two", 3])).toBe(false);
            expect(findLargestNumber([true, false, 0])).toBe(false);
        });
    });
});

describe('checkEvenOrOdd', function() {
    describe('core functionality', function() {
        it('should be a defined function', function() {
            expect(typeof checkEvenOrOdd).toBe('function');
        });
        it('should return a string when passed a number', function() {
            expect(typeof checkEvenOrOdd(7)).toBe('string');
        });
        it('should return "Even" when passed an even number 2', function() {
            expect(checkEvenOrOdd(2)).toBe('Even');
        });
        it('should return "Odd" when passed an odd number 7', function() {
            expect(checkEvenOrOdd(7)).toBe('Odd');
        });
        it('should return "Even" when passed a large even number ' + randomEvenNumber, function() {
            expect(checkEvenOrOdd(randomEvenNumber)).toBe('Even');
        });
        it('should return "Odd" when passed a large odd number ' + randomOddNumber, function() {
            expect(checkEvenOrOdd(randomOddNumber)).toBe('Odd');
        });
    });
    describe('validation', function() {
        it('should return false when called with no arguments', function() {
            expect(checkEvenOrOdd()).toBe(false);
        });
        it('should return false when passed a non-numeric value', function() {
            expect(checkEvenOrOdd("hello")).toBe(false);
            expect(checkEvenOrOdd(true)).toBe(false);
            expect(checkEvenOrOdd([1, 2, 3])).toBe(false);
            expect(checkEvenOrOdd({ a: 1, b: 2 })).toBe(false);
        });
    });
});

describe('convertToFahrenheit', function() {
    describe('core functionality', function() {
        it('should be a defined function', function() {
            expect(typeof convertToFahrenheit).toBe('function');
        });
        it('should return a number when passed a number', function() {
            expect(typeof convertToFahrenheit(68)).toBe('number');
        });
        it('should return the temperature in Fahrenheit when passed 20 Celsius', function() {
            expect(convertToFahrenheit(20)).toBe(68);
        });
        it('should return the temperature in Fahrenheit when passed ' + randomCelsiusTemperature + ' Celsius', function() {
            expect(convertToFahrenheit(randomCelsiusTemperature)).toBe(randomFahrenheitTemperature);
        });
    });
    describe('validation', function() {
        it('should return false when called with no arguments', function() {
            expect(convertToFahrenheit()).toBe(false);
        });
        it('should return false when passed a non-numeric value', function() {
            expect(convertToFahrenheit("hello")).toBe(false);
            expect(convertToFahrenheit(true)).toBe(false);
            expect(convertToFahrenheit([1, 2, 3])).toBe(false);
            expect(convertToFahrenheit({ a: 1, b: 2 })).toBe(false);
        });
    });
});