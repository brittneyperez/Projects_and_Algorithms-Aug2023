// * Fundamentals To-Do #1

// * Setting and Swapping
var myNumber = 42; // console.log("My Number: " + myNumber);
var myName = "Bri"; // console.log("My Name: " + myName);
myNumber = myName; // console.log("\n\"My Number\" now equals... " + myNumber);
myName = myNumber; // console.log("\n\"My Name\" now equals... " + myNumber);

// * Print -52 to 1066
for (let myInteger = -52; myInteger < 1067; myInteger++) {
    console.log(myInteger);
}

// * Don't Worry, Be Happy
function beCheerful() {
    for ( let i=1; i < 99; i++ ) {
        console.log(" Good morning!");
    }
}
beCheerful();

// * Multiples of Three - But Not All
for (let multiple = -300; multiple < 0; multiple+=3) {
    //? Check if multiple is -3 and -6 to skip and continue the process:
    if (multiple === -3 || multiple === -6) {
        continue;
    }
    console.log(multiple);
}

// * Printing Integers with While
let thisInteger = 2000;
while (thisInteger < 5280) {
    thisInteger += 1;
    console.log(thisInteger);
}

// * You say It's Your Birthday
function sayItsMyBday(num1, num2) {
    const myBirthMonth = 10;
    const myBirthDay = 1;
    if ((num1 === myBirthMonth && num2 === myBirthDay)
        || (num1 === myBirthDay && num2 === myBirthMonth) ) {
        console.log("How did you know?");
    } else {
        console.log("Just another day...")
    }
}
const monthGuess = 12;
const dayGuess = 4;
sayItsMyBday(monthGuess, dayGuess);

// * Leap Year
function checkIfLeapYear(yearToCheck) {
    //? If year is divisible by 4, it's a leap year. If divisible by 100, its not.
    if ( (yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) ) {
        console.log("Yes, it is!");
        return true;
    }
    console.log("It is not a leap year!")
    return false;
}
const year = 1979;
const isLeapYear = checkIfLeapYear(year);
console.log(isLeapYear);

// * Print and Count
let count = 0;
for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i);
        count++;
    }
}
console.log("Total Count:", count);

// * Multiples of Six
let newMultiple = 0;
while (newMultiple < 60000) {
    newMultiple += 6;
    console.log(newMultiple);
}

// * Counting, the Dojo Way
for (i=0; i<=100; i++) {
    if ( i % 10 === 0 ) {
        console.log("Coding Dojo")
    } else if ( i % 5 === 0 ) {
        console.log("Coding")
    }
    console.log(i);
}

// * What do you know?
function logIncomingValue(incoming) {
    console.log(incoming);
}
const myValue = "こんにちは。";
logIncomingValue(myValue);
logIncomingValue("testing, testing... 1, 2, 3!");

// * Whoa, That Sucker's Huge...
let sum = 0;
for (let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) {
        sum += 1;
    }
}
console.log("Sum of odd integers:", sum);

// * Countdown by Fours
let intCountdown = 2016;
while (intCountdown > 0) {
    intCountdown -= 4;
    if (intCountdown !== 0) { // exclude 0!
        console.log(intCountdown);
    }
}

// * Flexible Countdown
function logMultiplesDown(lowNum, highNum, mult) {
    for (let i=highNum; i >= lowNum; i -= mult) {
        console.log(i);
    }
}
logMultiplesDown(1,10,2);
logMultiplesDown(5,150,5);

// * The Final Countdown
function finalCountdown(param1, param2, param3, param4) {
    let i = param2;
    while(i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i);
        }
        i++;
    }
}
/* Function finalCountdown() explained:
1. Define finalCountdown() by 4 parameters.
2. Initialize variable i with value of param2;
3. Use while loop to iterate from param2 to param3 until i ≤ param3.
4. Use if statement to check if i is a multiple equal to param1, then print it.
    If i is a multiple equal to param4, skip it (not print).
*/
finalCountdown(3,5,17,9);