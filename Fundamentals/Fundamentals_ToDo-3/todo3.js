// * Algorithm 3 | Fundamentals I

//* 1. Biggie Size
function makeItBig(arr) {
    for (let i =0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big"; // turn this number into the string "big"
        }
    }
    return arr;
}
const myArray = [-1, 3, 5, -5];
const biggieSizeArray = makeItBig(myArray);
console.log((biggieSizeArray));


//* 2. Print Low, Return High
function printLowReturnHigh(arr) {
    // set defaults to later assign the lower/highest value:
    let lowestValue = arr[0];
    let highestValue = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowestValue) {
            lowestValue = arr[i];
        } else if (arr[i] > highestValue) {
            highestValue = arr[i];
        }
    }
    console.log("Lowest Value:", lowestValue);
    return highestValue;
}
const highestVal = printLowReturnHigh([-9, 0, 2, 4, 16, 108]);
console.log("Highest Value:", highestVal);


//* 3. Print One, Return Another
function printOneReturnAnother(arr) {
    const secondToLastVal = arr[arr.length - 2]; // accesses the second-to-last index
    let firstOddVal = null;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { // Check if current index is odd (by not equaling to 0).
            firstOddVal = arr[i]; // If so, then assign this as the firstOddValue.
            break;
        }
    }
    
    console.log("Second-to-Last Value:", secondToLastVal);
    return firstOddVal;
}
const firstOddValue = printOneReturnAnother([10, 11, 6, 0, 4, -2, 8]);
console.log("First Odd Value:", firstOddValue);


//* 4. Double Vision
function double(arr) {
    const doubledArr = [];
    
    for (let i=0; i<arr.length; i++) {
        doubledArr.push(arr[i] * 2); // doubles the value at each index
    }
    return doubledArr;
}
const originalArray = [1,2,3];
const doubledResult = double(originalArray);
console.log("Original Array:", originalArray);
console.log("Doubled Result:", doubledResult);


//* 5. Count Positives
function countPositives(arr) {
    let positiveCount = 0; // the counter
    
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        }
    }
    arr[arr.length - 1] = positiveCount; // replace last val with the positiveCount
    return arr;
}
const originalArrayTwo = [-1,1,1,1];
const newArray = countPositives(originalArrayTwo);
console.log(newArray);


//* 6. Evens and Odds
function findEvensAndOdds(arr) {
    let oddCount = 0;
    let evenCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { // If odd, count odd.
            oddCount++;
            evenCount = 0;
        } else { // Unless its even, then count even.
            evenCount++;
            oddCount = 0;
        }
        
        // If there are three evens in a row...
        if (oddCount === 3) {
            console.log("That's odd!")
            oddCount = 0; // resets the count
        } else if (evenCount === 3) {
            console.log("Even more so!")
            evenCount = 0; // resets the count
        }
    }
}
const evenOddArr = [1, 3, 5, 2, 4, 6, 8, 10, 12, 7, 9, 11];
findEvensAndOdds(evenOddArr);


//* 7. Increment the Seconds
function incrementOddsByOne(arr) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i]++;
        }
        console.log(arr[i]);
    }
    return arr;
}
const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8]
const resultingArr = incrementOddsByOne(arrayOfNums);
console.log("Modified Array:", JSON.stringify(resultingArr)); // JSON.stringfy() prevents the array's format from breaking in separate lines.


//* 8. Previous Lengths
function replaceStrWithPrevLength(arr) {
    const newArr = [arr[0].length]; // initializes the new array with the length of the first string
    
    for (let i=1; i<arr.length; i++) {
        newArr.push(arr[i - 1].length);
    }
    return newArr;
}
const stringArray = ["strawberry", "banana", "apple", "watermelon"];
const newArrayWithNums = replaceStrWithPrevLength(stringArray);
console.log(newArrayWithNums);


//* 9. Add Seven to Most
function addSevenToMost(arr) {
    const newArr = [];
    // by starting at index 1, we skip the first val of the ogArray
    for (let i=1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}
const ogArray = [2, 5, 8, 11];
const myNewArray = addSevenToMost(ogArray);
console.log("Original Array:", ogArray);
console.log("New Array:", myNewArray);


//* 10. Reverse Array
function reverseValues(arr) {
    for (let i=0; i < Math.floor(arr.length/2); i++) {
        const temporaryValue = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temporaryValue;
    }
    return arr;
}
const normalArray = [3, 1, 6, 4, 2];
const reversedArray = reverseValues(normalArray);
console.log(reversedArray);


//* 11. Outlook: Negative
function makeNegative(arr) {
    const negativeArr = [];
    
    for (let i=0; i < arr.length; i++) {
        negativeArr.push(0 - Math.abs(arr[i]));
        /* Math.abs() gets the absolute value of current index, then subtracts
        it by 0 to then push this new negative value to the array. */
    }
    return negativeArr;
}
const originalArrayThree = [1, -3, 5];
const negativeArray = makeNegative(originalArrayThree);
console.log(negativeArray);


//* 12. Always Hungry
function howHungry(arr) {
    let foundFood = false;
    
    for (let i=0; i< arr.length; i++) {
        if (arr[i] === "food") {
            console.log("Yummy!");
            foundFood = true;
        }
    }
    if (!foundFood) {
        console.log("I'm hungry!")
    }
}
const foodArray = ["pizza", "food", "fried rice", "salmon", "food"];
const arrayWithoutQFoodQ = ["pizza", "fried rice", "salmon"];
howHungry(foodArray);
howHungry(arrayWithoutQFoodQ);


//* 13. Swap Toward the Center
function swapTowardTheCenter(arr) {
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        const temporaryValue = arr[i]; // storing first index's value
        arr[i] = arr[arr.length - 1 - i]; // replaces the first idx's value with that of the last idx
        arr[arr.length - 1 - i] = temporaryValue; // replaces the last idx's value with the  temporaryValue
    }
    return arr;
}
const arrayInput1 = [true,42,"Ada",2,"pizza"];
const arrayInput2 = [1,2,3,4,5,6];
const arraySwapOne = swapTowardTheCenter(arrayInput1);
const arraySwapTwo = swapTowardTheCenter(arrayInput2);
console.log(arraySwapOne);
console.log(arraySwapTwo);


//* 14. Scale the Array
function multipleArrayValues(arr, num) {
    for (let i=0; i < arr.length; i++) {
        arr[i] *= num; // arr[i] = arr[i] * num
    }
    return arr;
}
const fourthOriginalArray = [2, 4, 6, 8, 10];
const numMultiplier = 4;
const multipliedArray = multipleArrayValues(fourthOriginalArray, numMultiplier);
console.log(multipliedArray);
