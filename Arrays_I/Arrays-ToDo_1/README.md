# Arrays Todo 1
２０２３年０８月１０日（木）

This repository contains the sixth collection of JavaScript algorithms to perform various tasks. 
- The objective is to solve each alogrithm without the use of built-in functions or create any additional arrays (unless otherwise instructed).
- `.length` is a property, and is allowed.

Each algorithm is briefly explained below:

## 1. Push Front

Given an array and an additional value, *insert this `value`* at the beginning of the array. `.push()` may be used but this algorithm can be solved without it.

Examples:

```jsx
pushFront([5,7,2,3], 8) // => [8,5,7,2,3]

pushFront([99], 7) // => [7,99]
```


## 2. Pop Front

Given an array, *remove and return* the value at the beginning of the array. Prove the value is removed from the array by printing it. `.pop()` may be used but this algorithm can be solved without it.

Examples:

```jsx
popFront([0,5,10,15]) // => 0 returned, with [5,10,15] printed in the function

popFront([4,5,7,9]) // => 4 returned, with [5,7,9] printed in the function
```

## 3. Insert At

Given an **array**, **index**, and additional **value**, *insert the value* into array at given index. 
- `pushFront(arr,val)` can be thought as equivalent to `insertAt(arr,0,val)`. 
- `.push()` may be used but this algorithm can be solved without it.

Examples:

```jsx
insertAt([100,200,5], 2, 311) // => [100,200,311,5]

insertAt([9,33,7], 1, 42) // => [9,42,33,7]
```


## BONUS 1: Remove At

Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. 
- Think of `popFront(arr)` as equivalent to `removeAt(arr,0)`.

Examples:

```jsx
removeAt([1000,3,204,77], 1) // => 3 returned, with [1000,204,77] printed in the function

removeAt([8,20,55,44,98], 3) // => 44 returned, with [8,20,55,98] printed in the function
```

## BONUS 2: Swap Pairs

Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

Examples:

```jsx
insertAt([1,2,3,4]) // => [2,1,4,3]

insertAt(["Brendan",true,42]) // => [true,"Brendan",42]
```

## BONUS 3: Remove Duplicates

Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. 
- Another variation of this function is made to test implementing the already tried-and-true `removeAt()` function.

Examples:
```jsx
removeDupes([-2,-2,3.14,5,5,10]) // => [-2,3.14,5,10]

removeDupes([9,19,19,19,19,19,29]) // => [9,19,29]
```