"use strict";
const arrr = [6, 4, 3, 1, 9, 44, 33, 2];
Array.prototype.odd = function () {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (i % 2 == 0) {
            count++;
        }
    }
    console.log(count);
    return count;
};
arrr.odd();
