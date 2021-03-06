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
Array.prototype.findObjFromArray = function (person) {
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === "object") {
            if (this[i] !== null &&
                !Array.isArray(this[i]) &&
                !(this[i] instanceof Date)) {
                for (const [key] of Object.entries(this[i])) {
                    if (typeof this[i][key] === "object") {
                        return findPropertyOfObject(this[i][key], person[key]);
                    }
                    if (this[i][key] === person[key]) {
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
console.log(arr.findObjFromArray(person));
