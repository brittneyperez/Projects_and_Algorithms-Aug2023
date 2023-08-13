// * Algorithm Todo 1 | Strings & Associative Arrays

//* 1. Remove Blanks
function removeBlanks(string) {
    let result = '';
    for (let i=0; i<string.length; i++) {
        if (string[i] !== ' ') {
            result += string[i];
        }
    }
    return result;
}
const result1 = removeBlanks("Pl ayTha tF u nkyM usi c ");
console.log("Result 1:", result1);
const result2 = removeBlanks("I can not BELIEVE it's not BUTTER");
console.log("Result 2:", result2);


//* 2. Get Digits
/* Two built-in functions"
    ? isNaN() : aka is Not a Number; checks if character is not a number.
    ? Number() : converts passing variable into a number.
*/
function getDigits(string) {
    let result = '';
    for (let i=0; i<string.length; i++) {
        // If character is not a valid number,...
        if ( !isNaN(Number(string[i])) ) {
            // then take character that is a number and add to the resultString:
            result += string[i];
        }
    }
    return Number(result);
}
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));


//* 3. Acronyms
function convertToAcronym(string) {
    const words = string.split(" "); // splits string into an array of words
    const acronymArr = [];
    
    for (let word of words) {
        if (word !== "") { // Skip empty spaces
            acronymArr.push(word[0].toUpperCase()); // add the first letter of each word to the acronym array
        }
    }
    return acronymArr.join("");
}
const acronym1 = convertToAcronym(" there's no free lunch - gotta pay yer way. ");
console.log("Acronym 1:", acronym1);
const acronym2 = convertToAcronym("Live from New York, it's Saturday Night!");
console.log("Acronym 2:", acronym2);


//* 4. Count Non-Spaces
function countNonSpaces(string) {
    let count = 0;
    for (let i=0; i<string.length; i++) {
        if (string[i] !== " ") {
            count++;
        }
    }
    return count;
}
const phrase1 = countNonSpaces("Honey pie, you are driving me crazy");
console.log(phrase1);
const phrase2 = countNonSpaces("Hello world !");
console.log(phrase2);


//* 5. Remove Shorter Strings
function removeShorterStrings(arr, minLength) {
    const result = []; // this array holds the resulting string that meets the minLength's condition
    for (let i=0; i < arr.length; i++) {
        const stringLength = arr[i].length;
        if (stringLength >= minLength) { // if string length meets the condition,
            result.push(arr[i]); // then it is added to `result`
        }
    }
    return result;
}
const input1 = ['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'];
const minLength1 = 4;
const stringOne = removeShorterStrings(input1, minLength1);
console.log(stringOne);

const input2 = ['There', 'is', 'a', 'bug', 'in', 'the', 'system'];
const minLength2 = 3;
const stringTwo = removeShorterStrings(input2, minLength2);
console.log(stringTwo);

