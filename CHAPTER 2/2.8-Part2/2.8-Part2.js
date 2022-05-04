"use strict";
const arr = [
    6,
    "value",
    1,
    undefined,
    null,
    { name: "john.doe", role: "admim" },
    "Test",
];
const WEIGHT = 2;
const findByWeight = (arr, WEIGHT) => {
    let countNumber = 0, countObject = 0, countFunction = 0, countUndefined = 0, countBolean = 0, countString = 0;
    let tempArrElements = [];
    let tempArrCounters = [];
    arr.forEach((element) => {
        switch (typeof element) {
            case "number":
                countNumber = 4;
                tempArrCounters.push(countNumber);
                tempArrElements.push(element);
                break;
            case "object":
                if (element === null) {
                    countObject = 2;
                    tempArrCounters.push(countObject);
                    tempArrElements.push(element);
                }
                else {
                    countObject = 10;
                    tempArrCounters.push(countObject);
                    tempArrElements.push(element);
                }
                break;
            case "function":
                countFunction = 10;
                tempArrCounters.push(countFunction);
                tempArrElements.push(element);
                break;
            case "undefined":
                countUndefined = 2;
                tempArrCounters.push(countUndefined);
                tempArrElements.push(element);
                break;
            case "boolean":
                countBolean = 4;
                tempArrCounters.push(countBolean);
                tempArrElements.push(element);
                break;
            case "string":
                countString = 8;
                tempArrCounters.push(countString);
                tempArrElements.push(element);
                break;
        }
    });
    //each counter matches the element
    console.log(tempArrCounters); //shows the values of the counters
    console.log(tempArrElements); //shows the values of the elements
    const isBelowThreshold = (currentValue) => currentValue > WEIGHT;
    console.log(tempArrCounters.every(isBelowThreshold));
};
findByWeight(arr, WEIGHT);
