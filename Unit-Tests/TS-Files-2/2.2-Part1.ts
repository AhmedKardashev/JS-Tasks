//Exam 2.2
//Part 1
interface Person {
  name: string;
}
const person: Person = { name: "John Doe" };

let array: any[] = [
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

interface Func {
  (parametyr1: any[], parametyr2: object): boolean;
}
export const findObj: Func = (arr, person) => {
  for (let i: number = 0; i < arr.length; i++) {
    if (
      Array.isArray(arr[i]) === false &&
      arr[i] !== null &&
      typeof arr[i] === "object"
    ) {
      if (arr[i] === person) {
        return true;
      } else return false;
    }
  }
};
console.log(findObj(array, person));
