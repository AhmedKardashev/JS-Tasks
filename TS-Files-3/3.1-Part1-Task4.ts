let array: any[] = [
  6,
  "Test",
  "value",
  1,
  undefined,
  [2, 3],
  true,
  new Date(),
  null,
  () => {
    console.log("Hello,  world!");
  },
  { count: 5 },
];
interface forObj {
  [key: string]: number;
}
interface Array<T> {
  countAray(): object;
}
Array.prototype.countAray = function (): object {
  let object: forObj = {
    nullCount: 0,
    objectsCount: 0,
    stringsCount: 0,
    numberCount: 0,
    undefinedCount: 0,
    functionCount: 0,
    booleanCount: 0,
    arrayCount: 0,
    dataCount: 0,
  };

  for (let i: number = 0; i < this.length; i++) {
    if (typeof this[i] === "number") {
      object.numberCount++;
    } else if (typeof this[i] === "string") {
      object.stringsCount++;
    } else if (this[i] === null) {
      object.nullCount++;
    } else if (typeof this[i] === "undefined") {
      object.undefinedCount++;
    } else if (typeof this[i] === "function") {
      object.functionCount++;
    } else if (typeof this[i] === "boolean") {
      object.booleanCount++;
    } else if (Array.isArray(this[i])) {
      object.arrayCount++;
    } else if (this[i] instanceof Date) {
      object.dataCount++;
    } else if (typeof this[i] === "object") {
      object.objectsCount++;
    }
  }

  return object;
};

console.log(array.countAray());
