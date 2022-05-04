"use strict";
// Part 1:
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const higherThan = 4;
const calculate = (arr1, higherThan) => {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] <= 4) {
            continue;
        }
        if (arr1[i] > higherThan) {
            sum = sum + arr1[i];
        }
    }
    return sum;
};
console.log(calculate(arr1, higherThan));
