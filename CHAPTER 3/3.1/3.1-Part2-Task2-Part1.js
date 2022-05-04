"use strict";
//Exam 2.2
//Part 1
const person = { name: "John Doe" };
let arr = [
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
Array.prototype.findObj = function (person) {
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) === false &&
            this[i] !== null &&
            typeof this[i] === "object") {
            if (this[i] === person) {
                return true;
            }
        }
    }
};
console.log(arr.findObj(person));
