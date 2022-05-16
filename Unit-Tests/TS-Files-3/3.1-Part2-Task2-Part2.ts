// Part 2

const person: {
  name: string;
} = { name: "John Doe" };

let arr: any[] = [
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
interface Array<T> {
  findObjFromArray(p: object): boolean;
}
Array.prototype.findObjFromArray = function (person: object): boolean {
  for (let i: number = 0; i < this.length; i++) {
    if (typeof this[i] === "object") {
      if (
        this[i] !== null &&
        !Array.isArray(this[i]) &&
        !(this[i] instanceof Date)
      ) {
        if (this[i] === person) {
          return true;
        } else {
          for (const value of Object.values(this[i])) {
            if (typeof value === "object") {
              if (value === person) {
                return true;
              } else return Object.values(value).findObjFromArray(person);
            }
          }
        }
      }
    }
  }
  return false;
};
console.log(arr.findObjFromArray(person));
