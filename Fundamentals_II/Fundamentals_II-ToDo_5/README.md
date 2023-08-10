# Fundamentals Todo 5
２０２３年０８月０９日（水）

This repository contains the fifth collection of JavaScript algorithms to perform various tasks. Each algorithm is briefly explained below:

## 1. Sigma

The function **`sigma(num)`** implements that given a number, the sum of all positive integers are returned up to _that_ number (inclusive). 

Example: 
```js
sigma(3) // = 6 (or 1 + 2 + 3); 
sigma(5) // = 15 (or 1 + 2 + 3 + 4 + 5).
```
<details>
    <summary>Logic for Function: sigma(num)</summary>

1. Initialized `sum` to `0`, `i` to `1`, and `num` to `3`.
2. First iteration: Added `1` to `sum`, resulting in `sum = 1`.
3. Second iteration: Added `2` to `sum`, resulting in `sum = 3`.
4. Third iteration: Added `3` to `sum`, resulting in `sum = 6`.
5. Loop exited since `i` reached `num`.
6. Final output: `sigma(3)` equals `6`.
</details>


2. ## **Factorial**

Given a number, this function **`factorial(num)`** will return the product (multiplication) of all positive integers from 1 up to number (inclusive).

Example: 
```js
factorial(3) // = 6 (or 1 * 2 * 3);
factorial(5) // = 120 (or 1 * 2 * 3 * 4 * 5)
```

## 3. Star Art

Assumeing that you have a text field that is exactly 75 characters long, you want to fill it with spaces and asterisks ('*') sometimes called stars. 

The objective is to create functions that should print the given number of asterisks consecutively. Depending on which function is called, those stars should be:
1. _left-justified_ (the first star would be very first char in the text field), or 
2. _right-justified_ (the last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or 
3. _centered_ in the 75-character text field (with the same number of spaces on either side of the block of stars, plus/minus one).

Steps to Take:

1. The function **`drawLeftStars(num)`** accepts a number and prints that many asterisks.
2. The function **`drawRightStars(num)`** prints 75 characters total. Stars should build from the right side. The last `num` characters should be asterisks; the other 75 should be spaces.
3. The function **`drawCenteredStars(num)`** that prints 75 characters total. The stars should be centered in the 75. The middle **num** characters should be asterisks; the rest of the 75 spaces.
4. (**Optional**) Create epic text-art Empire vs. Rebellion battle scenes, with ships like `(=*=)` and `>o<`.

## 4. Character Art

From the above, derive the following that accepts and draws the given characters, not just asterisks:

- `drawLeftChars(num, char)`
- `drawRightChars(num, char)`
- `drawCenteredChars(num, char)`

For all three of these, `char` can be safely assumed to be a string with the length of 1.