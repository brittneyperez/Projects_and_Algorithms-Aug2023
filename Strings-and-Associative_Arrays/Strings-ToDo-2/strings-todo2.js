// * Algorithm Todo 2 | Strings & Associative Arrays

//* 1. Reverse
function reverseString(string) {
    let reversedStr = '' ; // create an empty string to store the reversed string
    for (let i=string.length - 1; i >= 0; i--) { // iterate backwards through each character in the input string
        reversedStr += string[i]; // add each character to the 'reversed' string
    }
    return reversedStr;
}
console.log(reverseString("creature"));
console.log(reverseString("racecar"));
console.log(reverseString("tacocat"));


//* 2. Remove Even-Length Strings
function removeEvenLengthStrings(arr) {
    let filteredArr = []; // create new array to store the filtered strings
    for (let i=0; i< arr.length; i++) { // checking if current string's length is odd
        if (arr[i].length % 2 !== 0) { // if odd...,
            filteredArr.push(arr[i]); // ...then add the string to filteredArr
        }
    }
    // Update and input array with filteredArr:
    arr.length = 0;
    for (let i=0; i < filteredArr.length; i++) {
        arr.push(filteredArr[i]);
    }
}
let inputArray = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."];
console.log("Original Input:", inputArray);
removeEvenLengthStrings(inputArray);
console.log(inputArray);


//* 3. Integer to Roman Numerals
function intToRomanNum(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "";
    
    for (let i=0; i < values.length; i++) {
        while (num >= values[i]) { // subtract largest values as much as possible
            result += numerals[i]; // add to `result` corresponding numeral
            num -= values[i]; // subtract the values from the input number
        }
    }
    return result;
}
console.log(intToRomanNum(7));
console.log(intToRomanNum(84));
console.log(intToRomanNum(360));
console.log(intToRomanNum(2023));


//* 4. Roman Numerals to Integer
function romanNumToInt(numeralStr) {
    // roman numeral with corresponding value to map from:
    const numeralValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;
    let previousNumeralVal = 0;
    
    for (let i=numeralStr.length - 1; i >= 0; i--) {
        const currentVal = numeralValues[numeralStr[i]]; // get value of current numeral
        if (currentVal >= previousNumeralVal) {
            // if current value is >= to previous value, add to result
            result += currentVal;
        } else {
            // if current value is <=> to previous value, subtract from result
            result -= currentVal;
        }
        previousNumeralVal = currentVal; // update previous val for the next iteration
    }
    return result; // return calculated int value
}
console.log(romanNumToInt("III"));
console.log(romanNumToInt("DCIX"));
console.log(romanNumToInt("MXDII"));
