"use strict";
// задача: Patern 3
const printPatent3 = (n) => {
    let i, j, k, result;
    for (i = 1; i <= n; i++) {
        result = "";
        for (k = 1; k <= i; k++) {
            result += " " + k;
        }
        for (j = i - 1; j >= 1; j--)
            result += " " + j;
        console.log(result);
    }
};
printPatent3(5);
