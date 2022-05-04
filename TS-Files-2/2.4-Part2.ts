//Part 2:
const dataArray: number[] = [1, 2, 3, 4, 5, 6, 7];
const divisible: number = 2;
interface Func {
  (p1: number[], p2: number): number[];
}
const calculate: Func = (array, divisible) => {
  let evenNuberArr = [];
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] % divisible === 0) {
      evenNuberArr.push(array[i]);
    }
  }
  return evenNuberArr;
};

console.log(calculate(dataArray, divisible));
