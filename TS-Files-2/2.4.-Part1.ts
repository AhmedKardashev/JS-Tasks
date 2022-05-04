// Part 1:

const arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
const higherThan: number = 4;
interface Func {
  (p1: number[], p2: number): number;
}
const calculate: Func = (arr1, higherThan) => {
  let sum: number = 0;
  for (let i: number = 0; i < arr1.length; i++) {
    if (arr1[i] <= 4) {
      continue;
    }
    if (arr1[i] > higherThan) {
      sum = sum + arr1[i];
    }
  }
  return sum;
};
console.log(calculate(arr1, higherThan));
