// * Algorithm Set #2 | Arrays I

// * 1. Reverse
function reverseArray(arr) {
    for (let i=0; i < Math.floor(arr.length/2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 -i] = temp;
    }
    return arr;
}
const numericalArray = [1, 2, 3, 4, 5];
console.log(reverseArray(numericalArray));


// * 2. Rotate
function reverse(arr, start, end) {
    while (start < end) {
        const tempVal = arr[start];
        arr[start] = arr[end];
        arr[end] = tempVal;
        start++;
        end--;
    }
}
function rotateArr(arr, shiftBy) {
    // Handling cases where shiftBy > n:
    const n = arr.length;
    shiftBy = shiftBy % n;
    if (shiftBy < 0) {
        shiftBy = n + shiftBy; // Convert negative shiftBy to positive
    }
    
    reverse(arr, 0, n-1); // reverse the entire array.
    reverse(arr, 0, shiftBy-1); // reverse the first part of the array
    reverse(arr, shiftBy, n-1); // reverse the remaining part after shiftBy
}
const originalArray = [1, 2, 3, 4, 5];
const shiftBy = 2;
rotateArr(originalArray, shiftBy);
console.log(originalArray);


// * 3. Filter Range
function filterRange(arr, min, max) {
    let readIndex = 0;
    let writeIndex = 0;
    
    while (readIndex < arr.length) {
        if (arr[readIndex] >= min && arr[readIndex] <= max) { // If the value is within the range, keep it:
            arr[writeIndex] = arr[readIndex];
            writeIndex++;
        }
        readIndex++;
    }
    // Remove the extra elements after the writeIdx:
    arr.length = writeIndex;
}
const thisArray = [4, 2, 7, 1, 9, 3, 8];
console.log(thisArray);
const min = 3;
const max = 7;
filterRange(thisArray, min, max);
console.log(thisArray);


// * 4. Concat
function arrConcat(arr1, arr2) {
    // Use spread operator to spread arr1 and arr2 elements, which combines both arrays into a single new array:
    const concatenatedArray = [...arr1, ...arr2];
    return concatenatedArray;
}

const array1 = ['a', 'b'];
const array2 = [1, 2];
const newArray = arrConcat(array1, array2); // becomes a single array
console.log(newArray);
