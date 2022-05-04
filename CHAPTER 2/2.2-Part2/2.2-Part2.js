"use strict";
// Part 2
const person = { name: "John Doe" };
const arr = [
    6,
    "Test",
    "value",
    1,
    undefined,
    null,
    () => {
        console.log("Hello,  world!");
    },
    { count: 5 },
    { name: "John Doe", person: person },
    {
        name: "John Doe",
        personData: { firstPerson: "sdsdsd", secondPerson: {} },
    },
];
const findObjFromArray = (arr, person) => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            if (arr[i] !== null &&
                !Array.isArray(arr[i]) &&
                !(arr[i] instanceof Date)) {
                if (arr[i] === person) {
                    return true;
                }
                else {
                    for (const value of Object.values(arr[i])) {
                        if (typeof value === "object") {
                            if (value === person) {
                                return true;
                            }
                            else
                                return findObjFromArray(Object.values(value), person);
                        }
                    }
                }
            }
        }
    }
    return false;
};
console.log(findObjFromArray(arr, person));
