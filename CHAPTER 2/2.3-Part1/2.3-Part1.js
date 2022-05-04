"use strict";
//Part 1:
const arr1 = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];
const arr2 = [
    null,
    () => {
        console.log("Hello,  world!");
    },
    ["one", "five"],
    undefined,
    6,
];
function appender(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr2[j] !== null &&
                    arr2[j] !== undefined &&
                    arr2[j] !== NaN &&
                    arr2[j] !== 0) {
                    arr1[i].push(arr2[j]);
                }
            }
        }
    }
    return arr1;
}
console.log(appender(arr1, arr2));
