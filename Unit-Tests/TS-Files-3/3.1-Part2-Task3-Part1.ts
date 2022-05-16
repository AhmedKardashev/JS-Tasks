//Part 1:

const arr1: any[] = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];

const arr2: any[] = [
  null,
  () => {
    console.log("Hello,  world!");
  },
  ["one", "five"],
  undefined,
  6,
];
interface Array<T> {
  appender(p: any[]): number[];
}
Array.prototype.appender = function (arr2: any[]): number[] {
  for (let i: number = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      for (let j = 0; j < arr2.length; j++) {
        if (
          arr2[j] !== null &&
          arr2[j] !== undefined &&
          arr2[j] !== NaN &&
          arr2[j] !== 0
        ) {
          this[i].push(arr2[j]);
        }
      }
    }
  }
  return this;
};

console.log(arr1.appender(arr2));
