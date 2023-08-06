// * Algorithm - Fundametals II

// * Countdown
function countdownArray(numberInput) {
    let newArray = [];
    
    for (let i = numberInput; i >= 0; i--) {
        newArray.push(i);
    }
    return newArray;
}
const thisArray = countdownArray(7);
console.log(thisArray + "\nArray Length:", thisArray.length);


// * Print and Return
function gimmeTwoNums(twoNumberedArray) {
    console.log(twoNumberedArray[0]);
    return twoNumberedArray[1];
}
const printAndReturnArray = gimmeTwoNums([7,21]); // prints ONLY 7
console.log("Array's 2nd value:", printAndReturnArray); // prints ONLY return value, 21


// * First Plus Length
function firstPlusLength(arr) {
    const firstValue = arr[0];
    const arrLength = arr.length;
    
    return firstValue + arrLength;
}
// Scenario 1: First value is a number.
const numbersArr = [5, 25, 55, 75];
const firstResult = firstPlusLength(numbersArr); // arr[0] + arrLength = 5 + 4
console.log("Scenario 1 Result:", firstResult); // output: 9

// Scenario 2: First value is a string.
const stringArr = ["what?", 25, 50, 75];
const secondResult = firstPlusLength(stringArr); // won't add, but will concantenate
console.log("Scenario 2 Result:", secondResult); // output: what?4

// Scenario 3: First value is a boolean.
const booleanArr = [false, 25, 50, 75];
const thirdResult = firstPlusLength(booleanArr); // only arr.length is printed
console.log("Scenario 3 Result:", thirdResult); // output: 4


// * Values Greater than Second
function valGreaterThanSecond(arr) {
    const secondValue = arr[1];
    let count = 0;

    for (let i=0; i<arr.length; i++) {
        if (arr[i] > secondValue) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}
const anotherNumArray = [1, 3, 5, 7, 9, 13];
console.log("Count of values greater than the 2nd value:", valGreaterThanSecond(anotherNumArray));
// output: 5, 7, 9, 13; Count: 4


// * Values Greater than Second, Generalized
function generalizedGreaterThanSecond(arr) {
    // Check if array has at least 2 values:
    if (arr.length <= 1) {
        console.log("The array must be at least two values.")
        return [];
    }
    
    const secondVal = arr[1];
    // Callback function to create a new, filtered array by filtering the new value based on the condition that the current val being processed > secondVal.
    const filteredArr = arr.filter(value => value > secondVal);
    const newCount = filteredArr.length;
    
    console.log("Values greater than the 2nd value:", filteredArr);
    console.log("Count of values greater than the 2nd value:", newCount);
    return filteredArr; // newly formed array
}
const anotherNumbersArray = [1, 3, 5, 7, 9, 13];
generalizedGreaterThanSecond(anotherNumbersArray);


// * This Length, That Value
function thisLengthThatVal(num1, num2) {
    if (num1 === num2) {
        console.log("Jinx!")
    } else {
        const resultingArray = Array(num1).fill(num2);
        return resultingArray;
    }
}
thisLengthThatVal(7,7);
console.log(thisLengthThatVal(5,7));

// * Fit the First Value
function checkFirstVal(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!")
    } else if (arr[0] < arr.length) {
        console.log("Too small!")
    } else {
        console.log("Just right!")
    }
}
const arr1 = [3,6,9,12,15];
const arr2 = [9,6,9,12,15];
const arr3 = [5,6,9,12,15];
checkFirstVal(arr1);
checkFirstVal(arr2);
checkFirstVal(arr3);

// * Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees) {
    const cDegrees = (fDegrees - 32) * (5/9);
    return cDegrees;
}
const fTemp = 77;
const cTemp = fahrenheitToCelsius(fTemp);
console.log(`${fTemp}˚F is equivalent to ${cTemp}˚C.`);

// * Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees) {
    const fDegrees = (9/5 * cDegrees) + 32;
    return fDegrees;
}
const newcTemp = 25;
const newfTemp = celsiusToFahrenheit(newcTemp);
console.log(`${newcTemp}˚C is equivalent to ${newfTemp}˚F.`);

// * Bonus: Finding the Equating Temp
function findEquatingTemp() {
    for (let celsiusTemp = 200; celsiusTemp >= -40; celsiusTemp--) {
        const fahrenheitTemp = (9/5 * celsiusTemp) + 32;
        if (celsiusTemp === fahrenheitTemp) {
            return celsiusTemp;
        }
    }
    return null;
}
const equatingTemp = findEquatingTemp();
console.log(`The Farenheit and Celsius values equate at ${equatingTemp} degrees.`);
