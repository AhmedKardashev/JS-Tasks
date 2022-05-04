"use strict";
// задача:Patern4
const Patern4 = (n) => {
    let string = "";
    // Upside pyramid
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = n; j >= i; j--) {
            string += " ";
        }
        // printing k
        for (let k = 1; k <= i; k++) {
            string += `${k} `;
        }
        string += "\n";
    }
    //
    for (let i = 1; i <= n - 1; i++) {
        // printing spaces
        for (let j = 0; j <= i; j++) {
            string += " ";
        }
        // printing k
        for (let k = 1; k <= n - i; k++) {
            string += `${k} `;
        }
        string += "\n";
    }
    console.log(string);
};
Patern4(5);
