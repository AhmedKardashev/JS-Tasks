"use strict";
const person = { name: "John Doe" };
let array = [
    6,
    "Test",
    "value",
    person,
    1,
    undefined,
    null,
    () => {
        console.log("Hello,  world!");
    },
    { count: 5 },
    { name: "John Doe" },
];
const findObj = (arr, person) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) === false &&
            arr[i] !== null &&
            typeof arr[i] === "object") {
            if (arr[i] === person) {
                return true;
            }
        }
    }
};
console.log(findObj(array, person));
