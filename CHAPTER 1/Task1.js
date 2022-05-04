"use strict";
// Task 1:
const numberArray = [6, 4, 3, 1, 9, 44, 33, 2];
const odd = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            count++;
        }
    }
    console.log(count);
    return count;
};
odd(numberArray);
