"use strict";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomize = (array) => {
    const randomlySortedArray = array.sort(() => 0.5 - Math.random());
    console.log(randomlySortedArray);
    let result = [];
    let tempArray = [];
    let theLongestNumberLine = [];
    for (let i = 0; i < randomlySortedArray.length; i++) {
        if (randomlySortedArray[i] < randomlySortedArray[i + 1]) {
            tempArray.push(randomlySortedArray[i]);
        }
        else if (randomlySortedArray[i] > randomlySortedArray[i + 1]) {
            tempArray.push(randomlySortedArray[i]);
            result.push(tempArray);
            tempArray = [];
        }
        else {
            tempArray.push(randomlySortedArray[i]);
            result.push(tempArray);
            tempArray = [];
        }
    }
    for (let k = 0; k < result.length; k++) {
        if (theLongestNumberLine.length < result[k].length) {
            theLongestNumberLine = result[k];
        }
    }
    return theLongestNumberLine;
};
console.log(randomize(array));
