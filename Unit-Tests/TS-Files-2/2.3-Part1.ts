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
interface Leng {
  length: number;
}
export const appender = (arr1: any[], arr2: any[]): any[] => {
  for (let i: number = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      for (let j: number = 0; j < arr2.length; j++) {
        if (
          arr2[j] !== null &&
          arr2[j] !== undefined &&
          arr2[j] !== NaN &&
          arr2[j] !== 0
        ) {
          arr1[i].push(arr2[j]);
        }
      }
    }
  }
  return arr1;
};

console.log(appender(arr1, arr2));
