"use strict";
const obj = {
    func: () => {
        console.log("Im Function");
    },
    person: {
        firstName: "John",
        lastName: "Doe",
        role: "Admin",
        nested: {
            name: "Ahmed",
            lastName: "Kardashev",
            age: 22,
            city: "Gotse - Delchev",
            nested2: {
                name: "Ad",
                lastName: "Kar",
                age: 22,
                city: "Gotse - Delchev",
            },
        },
    },
    permissions: ["read", "write", "special"],
    age: 42,
    competencies: [
        { skill: "JavaScript", level: "junior" },
        { skill: "css", level: "junior" },
    ],
};
function deepCopyFunction() {
    let outObject, value, key;
    outObject = Array.isArray(this) ? [] : {};
    for (key in this) {
        if (this.hasOwnProperty(key)) {
            value = this[key];
            if (!value || typeof value !== "object") {
                outObject[key] = value;
            }
            else {
                outObject[key] = deepCopyFunction.apply(value);
            }
        }
    }
    return outObject;
}
///
Object.prototype.deepCopy = deepCopyFunction;
// console.log(obj.deepCopy());//
//
