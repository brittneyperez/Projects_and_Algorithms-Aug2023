// * Algorithm Set #1 | Arrays I

//* 1. Push Front
function pushFront(arr, value) {
    let newArr = [value]; // new array created with the value already contained
    // for loop to add on to this newArr
    for (let i=0; i<arr.length; i++) {
        // Using the original arr, copy each element to the newArr
        newArr[i+1] = arr[i];
    }
    return newArr;
}
console.log(pushFront([5,7,2,3], 8));
console.log(pushFront([99], 7));


//* 2. Pop Front
function popFront(arr) {
    if (arr.length === 0) {
        return null;
    }
    // console.log("\nOriginal Array:", arr);
    const removedVal = arr[0]; // storing first element of arr
    for (let i=0; i < arr.length - 1; i++) {
        // ? shift all elements following to the left:
        arr[i] = arr[i+1];
    }
    // console.log("Modified Array:", arr);
    arr.length--; // ? decrease length of arr
    
    console.log("Array Result:", arr);
    return "Removed Value: " + removedVal;
}
console.log(popFront([0,5,10,15]));
console.log(popFront([4,5,7,9]));
console.log(popFront([]));


//* 3. Insert At
function insertAt(arr, idx, val) {
    // is it a valid index???
    if (idx < 0 || idx > arr.length) {
        arr.push(val); // if not, then create arr or add it to end of arr
    } else { // otherwise, insert val at index
        // shift elements to the right to make space for incoming val
        for (let i=arr.length; i > idx; i--) {
            arr[i] = arr[i-1];
        }
        arr[idx] = val;
    }
    return arr;
}
//                       arr    idx  val
console.log(insertAt([100,200,5], 2, 311)); // => [100,200,311,5]
console.log(insertAt([9,33,7], 1, 42));  // => [9,42,33,7]
console.log(insertAt([], 1, 42));  // => [ 42 ]


//* BONUS 1: Remove At
function removeAt(arr, idx) {
    // check if index is within bounds
    if (idx >= 0 && idx < arr.length) {
        // if valid, store removing value at index
        const removedVal = arr[idx];
        for (let i=idx; i < arr.length; i++) { // then shift elements to left
            arr[i] = arr[i+1];
        } // eventually the value at the given idx will be overwritten ("removed")
        arr.length -= 1;// shorten array
        console.log("Removed Value:", removedVal);
    }
    return arr;
}
console.log(removeAt([1000, 3, 204, 77], 1));
console.log(removeAt([8, 20, 55, 44, 98], 3));
console.log(removeAt([], 2)); // => returns []

//* BONUS 2: Swap Pairs
function swapPairs(arr) {
    for (let i=0; i < (arr.length - 1); i += 2) {
        const tempVal = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tempVal;
    }
    return arr;
}
const swappedArray1 = swapPairs([1,2,3,4]);
console.log("Swapped Array 1:", swappedArray1);

const swappedArray2 = swapPairs(["Brendan",true,42]);
console.log("Swapped Array 2:", swappedArray2);


//* BONUS: Remove Duplicates
function removeDupes(arr) {
    const resultingArr = [];
    let resultingIdx = 0;
    
    for (let i=0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            resultingArr[resultingIdx] = arr[i];
            resultingIdx++;
        }
    }
    return resultingArr;
}
const dupe1 = removeDupes([-2,-2,3.14,5,5,10]);
console.log("Result 1:", dupe1);
const dupe2 = removeDupes([9,19,19,19,19,19,29]);
console.log("Result 2:", dupe2);


function removeDupesWithRemoveAt(arr) {
    let idx = 0;
    while (idx < arr.length) {
        while (arr[idx] === arr[idx+1]) {
            //? Use removeAt() to remove duplicate elemnet at idx+1
            removeAt(arr, idx+1);
        }
        idx++;
    }
    return arr;
}
function removeAt(arr, idx) {
    // check if index is within bounds
    if (idx >= 0 && idx < arr.length) {
        // if valid, store removing value at index
        const removedVal = arr[idx];
        for (let i=idx; i < arr.length; i++) { // then shift elements to left
            arr[i] = arr[i+1];
        } // eventually the value at the given idx will be overwritten ("removed")
        arr.length -= 1;// shorten array
        console.log("Removed Value:", removedVal);
    }
    return arr;
}

const dupe3 = removeDupesWithRemoveAt([-2,-2,3.14,5,5,10]);
console.log("Result 3:", dupe3);
console.log("");
const dupe4 = removeDupesWithRemoveAt([9,19,19,19,19,19,29]);
console.log("Result 4:", dupe4);