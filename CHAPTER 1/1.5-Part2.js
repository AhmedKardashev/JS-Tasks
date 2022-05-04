"use strict";
//Part 2
let object1 = {
    cards: 6,
    label: "Test",
    description: "value",
    type: 1,
    role: undefined,
    person: {
        name: "John Doe",
        phones: [
            { tel1: 0892323, tel2: 232323232 },
            { Bulgarian: [08892523232, 32323123423] },
        ],
    },
    date: new Date(),
    skills: null,
    report: () => {
        console.log("Hello,  world!");
    },
    experience: { count: 5 },
};
const heaviness = (object) => {
    let count = 0;
    let objectArray;
    if (Array.isArray(object)) {
        objectArray = object;
    }
    objectArray = Object.values(object);
    objectArray.forEach((element) => {
        switch (typeof element) {
            case "number":
                count = count + 4;
                break;
            case "object":
                if (element === null) {
                    count += 2;
                }
                else if (element instanceof Date) {
                    count += 5;
                }
                else {
                    count += 10;
                    count += heaviness(element);
                }
                break;
            case "function":
                count += 10;
                break;
            case "undefined":
                count += 2;
                break;
            case "boolean":
                count += 4;
                break;
            case "string":
                count += 8;
                break;
        }
    });
    return count;
};
console.log(heaviness(object1));
