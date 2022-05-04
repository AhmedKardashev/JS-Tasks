"use strict";
// Task 1.4
let array = [
    6,
    "Test",
    "value",
    1,
    undefined,
    [2, 3],
    true,
    new Date(),
    null,
    () => {
        console.log("Hello,  world!");
    },
    { count: 5 },
];
function countArray(arr) {
    let object = {
        nullCount: 0,
        objectsCount: 0,
        stringsCount: 0,
        numberCount: 0,
        undefinedCount: 0,
        functionCount: 0,
        booleanCount: 0,
        arrayCount: 0,
        dataCount: 0,
    };
    arr.forEach((element) => {
        if (typeof element === "number") {
            object.numberCount++;
        }
        else if (typeof element === "string") {
            object.stringsCount++;
        }
        else if (element === null) {
            object.nullCount++;
        }
        else if (typeof element === "undefined") {
            object.undefinedCount++;
        }
        else if (typeof element === "function") {
            object.functionCount++;
        }
        else if (typeof element === "boolean") {
            object.booleanCount++;
            ``;
        }
        else if (Array.isArray(element)) {
            object.arrayCount++;
        }
        else if (element instanceof Date) {
            object.dataCount++;
        }
        else if (typeof element === "object") {
            object.objectsCount++;
        }
    });
    return object;
}
console.log(countArray(array));
