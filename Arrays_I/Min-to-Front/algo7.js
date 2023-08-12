// * Min-to-Front | Arrays Algorithm #1

function moveMinToFront(arr) {
    let minIdx = 0; // initializing idnex of the minimum element
    // Find the index of the minimum element:
    for (let i=1; i < arr.length; i++) {
        if (arr[i] < arr[minIdx]) {
            minIdx = i;
        }
    }
    // Move the minimum element to the front
    const minValue = arr[minIdx];
    for (let i = minIdx; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = minValue; // Place the minimum value at the front
    return arr;
}
const array = [4,2,1,3,5];
console.log(moveMinToFront(array));