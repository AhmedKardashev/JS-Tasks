"use strict";
// Task 2:
const array1 = [6, 4, 3, 1, 9, 44, 33, 2];
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    console.log(inputArr);
    return inputArr;
};
bubbleSort(array1);
