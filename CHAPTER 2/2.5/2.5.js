"use strict";
let arr = [
    {
        person: {
            firstName: "John",
            lastName: "Doe",
            role: "Admin",
        },
        permissions: ["read", "write", "special"],
        age: 42,
        competencies: [
            { skill: "JavaScript", level: "junior" },
            { skill: "css", level: "junior" },
        ],
    },
    "sunny day",
    5,
];
const flattenObj = (object) => {
    let result = {};
    for (const i in object) {
        if (typeof object[i] === "object") {
            const temp = flattenObj(object[i]);
            for (const j in temp) {
                result[i + "_" + j] = temp[j];
            }
        }
        else {
            result[i] = object[i];
        }
    }
    return result;
};
console.log(flattenObj(arr));
