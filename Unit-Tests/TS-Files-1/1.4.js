"use strict";
// Task 1.4
exports.__esModule = true;
exports.countArray = void 0;
var array = [
    6,
    "Test",
    "value",
    1,
    undefined,
    [2, 3],
    true,
    new Date(),
    null,
    function () {
        console.log("Hello,  world!");
    },
    { count: 5 },
];
function countArray(arr) {
    var object = {
        nullCount: 0,
        objectsCount: 0,
        stringsCount: 0,
        numberCount: 0,
        undefinedCount: 0,
        functionCount: 0,
        booleanCount: 0,
        arrayCount: 0,
        dataCount: 0
    };
    arr.forEach(function (element) {
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
            "";
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
exports.countArray = countArray;
console.log(countArray(array));
