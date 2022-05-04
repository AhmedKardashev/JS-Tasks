const arr = [
  6,
  "value",
  1,
  undefined,
  null,
  { name: "john.doe", role: "admim" },
  "Test",
];
const WEIGHT: number = 2;

interface FindByWeight {
  (p1: any[], p2: number): void;
}
const findByWeight: FindByWeight = (arr, WEIGHT) => {
  let countNumber: number = 0,
    countObject: number = 0,
    countFunction: number = 0,
    countUndefined: number = 0,
    countBolean: number = 0,
    countString: number = 0;
  let tempArrElements: any[] = [];
  let tempArrCounters: number[] = [];
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
        } else {
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

  const isBelowThreshold = (currentValue: number): boolean =>
    currentValue > WEIGHT;
  console.log(tempArrCounters.every(isBelowThreshold));
};
findByWeight(arr, WEIGHT);
