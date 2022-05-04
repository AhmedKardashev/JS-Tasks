"use strict";
const array = [6, 4, 3, 1, 9, 44, 33, 2];
Array.prototype.bubbleSort = function () {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = this;
            }
        }
    }
    console.log(this);
    return this;
};
array.bubbleSort();
console.log(array);
