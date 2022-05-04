"use strict";
//  задача: Patern 2
const printPatterRerverse2 = (n) => {
    let result;
    for (let k = n - 1; k >= 1; k--) {
        result = "";
        for (let r = 1; r <= k; r++) {
            result += " " + r;
        }
        console.log(result);
    }
};
const printPatter2 = (n) => {
    let result;
    for (let i = 1; i <= n; i++) {
        result = "";
        for (let j = 1; j <= i; j++) {
            result += " " + j;
        }
        console.log(result);
    }
    printPatterRerverse2(n);
};
printPatter2(5);
