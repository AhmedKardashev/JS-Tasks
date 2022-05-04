"use strict";
//Part 2:
const dataArray = [1, 2, 3, 4, 5, 6, 7];
const divisible = 2;
const calculate = (array, divisible) => {
    let evenNuberArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % divisible === 0) {
            evenNuberArr.push(array[i]);
        }
    }
    return evenNuberArr;
};
console.log(calculate(dataArray, divisible));
