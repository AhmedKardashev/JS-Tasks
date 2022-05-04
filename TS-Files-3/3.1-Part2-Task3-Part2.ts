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
interface Array<T> {
  appender(p: any[]): number[];
}
Array.prototype.appender = function (arr2: any[]): any[] {
  for (let i: number = 0; i < this.length; i++) {
    if (i % 2 === 0) {
      for (let j: number = 0; j < arr2.length; j++) {
        if (typeof arr2[j] === "number" || typeof arr2[j] === "function") {
          this[i].push(arr2[j]);
        }
        if (Array.isArray(arr2[j])) {
          this[i].push(...arr2[j]);
        }
      }
    } else
      for (let j: number = 0; j < arr2.length; j++) {
        if (typeof arr2[j] === "object" && !Array.isArray(arr2[j])) {
          this[i].push(arr2[j]);
        }
      }
  }

  return this;
};

console.log(arr1.appender(arr2));
