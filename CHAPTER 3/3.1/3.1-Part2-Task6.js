"use strict";
const arraye = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const percentage = 50;
Array.prototype.removeInner = function (percent) {
    const arrLength = this.length;
    let calculatePercentage = (percent / 100) * arrLength;
    console.log(calculatePercentage);
    const elementsOnEachEnd = Math.floor((arrLength - calculatePercentage) / 2);
    console.log(elementsOnEachEnd);
    return [
        ...this.slice(0, elementsOnEachEnd),
        ...this.slice(-elementsOnEachEnd),
    ];
};
console.log(arraye.removeInner(percentage));
