# Fundamentals Todo ３
２０２３年０８月０６日（日）

This repository contains a third collection of JavaScript algorithms to perform various tasks. Each algorithm is briefly explained below:

## 1. Biggie Size

Given an array, this function will change all positive numbers in the array to “big”. Example: `makeItBig([-1,3,5,-5])` returns that same array, changed to [-1,"big","big",-5].

## 2. Print Low, Return High

This function takes an array of numbers which prints the lowest value in the array, and returns the highest value.

## 3. Print One, Return Another

A function that takes an array of numbers which it prints the second-to-last value in the array, and returns first odd value.

## 4. Double Vision

Given an array, this function returns a new array where each value in the original has been doubled. Calling `double([1,2,3])` should return [2,4,6] without changing original.

## 5. Count Positives
Given an array of numbers, this function will replace last value with the number of positive values. Example, `countPositives([-1,1,1,1])` changes array to [-1,1,1,3] and returns it.

## 6. Evens and Odds

This function accepts an array where every time that array has three odd values in a row, it prints "That’s odd!" Otherwise, every time the array has three evens in a row, it will print "Even more so!".

## 7. Increment the Seconds
Given `arr`, add 1 to odd elements ([1], [3], etc.), `console.log` all values and return arr.

## 8. Previous Lengths

Passing an array containing strings, this function works within that same array, replacing each string with a number – the length of the string at previous array index – and returns the array.

## 9. Add Seven to Most

This function accepts an array where a new array is returned with all values except the first, adding 7 to each. The original array is to remain unaltered.

## 10. Reverse Array

Given an array, this function reverses the values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

## 11. Outlook: Negative

Given an array, this function will create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

## 12. Always Hungry

This function accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then it prints "I'm hungry" once.

## 13. Swap Toward the Center

Given array, the function will swap first and last, third and third-to-last, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

## 14. Scale the Array

Given array `arr` and number `num`, multiply each `arr` value by `num`, and return the changed `arr`.