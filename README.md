# JavaScript 1 Extra Practice With Test Suites

## Instructions

- #### You do `NOT` need to check out to another branch you can work off the `main` branch.

## Problems

1. Create a function named `sum` that returns the sum of two numbers.

        isSum(2, 3)  // Output: 5
        sum(-45, -3);  // Output: 5
        sum() // Output: false
        sum("2", 2) // Output : false
        sum(false, 3) // Output: false
        sum(2, []) // Output: false
        sum({}, 7) // Output: false
2. Create a function named `reverseString` that returns the reverse of a given string.
    
         reverseString("hello");  // Output: "olleh"
         reverseString("Grace Hopper");  // Output: "reppoH ecarG"
         reverseString(); // Output: false
         reverseString(2) // Output: false
         reverseString([]) // Output: false
         reverseString({}) // Output: false
3. Create a function named `findLargestNumber` that returns the largest number from an array of numbers.

        findLargestNumber([4, 9, 2, 7, 5]);  // Output: 9
        findLargestNumber([1, 2, 3, 4, 5]);  // Output: 5
        findLargestNumber() // Output: false
        findLargestNumber("A string) // Output: false
        findLargestNumber(["a", "string"]) // Output: false
4. Create a function named `checkEvenOrOdd` that checks if a number is even or odd.
    
        checkEvenOrOdd(2) // Output: "Even"
        checkEvenOrOdd(7) // Output: "Odd"
        checkEvenOrOdd("") // Output: false
        checkEvenOrOdd([]) // Output: false
5. Create a function named `convertToFahrenheit` that converts a temperature from Celsius to Fahrenheit.

        convertToFahrenheit(20) // Output: 68
        convertToFahrenheit(-10) // Output: 14
        