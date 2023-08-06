# Fundamentals Todo ２
２０２３年０８月０５日（土）

This repository contains a second collection of JavaScript algorithms to perform various tasks. Each algorithm is briefly explained below:

## 1. Countdown

This function accepts a number as an input and returns a new array that counts down by one, from the inputted number (as array’s ‘zeroth’ element) down to 0 (as the last element). Then the array's length is logged.

## 2. Print and Return

This function will receive an array with two numbers-to print the first value, and return the second.

## 3. First Plus Length

Given an array, the function will return the sum of the first value in the array, plus the array’s length. Scenarios to test: What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false)?

## 4. Values Greater than Second

For [1,3,5,7,9,13], the values that are greater than its 2nd value will be printed as well as return how many values this is.

## 5. Values Greater than Second, Generalized

This function accepts any array, and returns a new array with the array values that are greater than its 2nd value. This will print how many values there is. There is also a condition to prevent arrays with less than required values.

## 6. This Length, That Value

Given two numbers, this function will return an array of length `num1` with each value `num2`. Print "Jinx!" if they are same.

## 7. Fit the First Value

This function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

## 8. Fahrenheit to Celsius

Kelvin wants to convert between temperature scales. The function, fahrenheitToCelsius(fDegrees), accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

## 9. Celsius to Fahrenheit

The function celsiusToFahrenheit(cDegrees) will accept a number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

(Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.