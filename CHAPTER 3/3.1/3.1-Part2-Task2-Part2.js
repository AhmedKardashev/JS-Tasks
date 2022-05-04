"use strict";
// Part 2
const person = { name: "John Doe" };
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
    { name: "John Doe", person: person },
    {
        name: "John Doe",
        personData: { firstPerson: "sdsdsd", secondPerson: {} },
    },
];
Array.prototype.findObjFromArray = function (person) {
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === "object") {
            if (this[i] !== null &&
                !Array.isArray(this[i]) &&
                !(this[i] instanceof Date)) {
                if (this[i] === person) {
                    return true;
                }
                else {
                    for (const value of Object.values(this[i])) {
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
console.log(arr.findObjFromArray(person));
