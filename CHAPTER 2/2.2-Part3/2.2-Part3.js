"use strict";
const person = {
    firstName: "John",
    lastName: "Doe",
    role: {
        type: "Admin",
        id: 2,
    },
};
let arr = [
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
    {
        firstName: "John",
        lastName: "Doe",
        role: { type: "Admin", id: 2 },
    },
];
const findPropertyOfObject = (value, person) => {
    console.log(value);
    for (const [key] of Object.entries(value)) {
        if (value[key] === person[key]) {
            continue;
        }
        else
            return false;
    }
    return true;
};
const findObjFromArray = (arr, person) => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            if (arr[i] !== null &&
                !Array.isArray(arr[i]) &&
                !(arr[i] instanceof Date)) {
                for (const [key] of Object.entries(arr[i])) {
                    if (typeof arr[i][key] === "object") {
                        return findPropertyOfObject(arr[i][key], person[key]);
                    }
                    if (arr[i][key] === person[key]) {
                        continue;
                    }
                    else
                        break;
                }
            }
        }
    }
    return false;
};
console.log(findObjFromArray(arr, person));
