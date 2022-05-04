"use strict";
//  задача: Patent 1
const printPatterOne = (n) => {
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let k = 1; k <= i; k++) {
            result += " " + k;
        }
        console.log(result);
    }
};
printPatterOne(5);
