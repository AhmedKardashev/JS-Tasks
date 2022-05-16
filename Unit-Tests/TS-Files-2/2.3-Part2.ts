//Part 2:
const arr1: any[] = [
  [1, 2, 3, 4],
  ["one", "two"],
  [5, 6],
];

const arr2: any[] = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  { role: "admin" },
  { name: "John" },
  [1000, 1001],
];
interface Func {
  (p1: any[], p2: any[]): any[];
}

export const appender: Func = (arr1, arr2) => {
  for (let i: number = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      for (let j: number = 0; j < arr2.length; j++) {
        if (typeof arr2[j] === "number" || typeof arr2[j] === "function") {
          arr1[i].push(arr2[j]);
        }
        if (Array.isArray(arr2[j])) {
          arr1[i].push(...arr2[j]);
        }
      }
    } else
      for (let j = 0; j < arr2.length; j++) {
        if (typeof arr2[j] === "object" && !Array.isArray(arr2[j])) {
          arr1[i].push(arr2[j]);
        }
      }
  }

  return arr1;
};

console.log(appender(arr1, arr2));
