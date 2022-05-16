// Task 1:
const numberArray: number[] = [6, 4, 3, 1, 9, 44, 33, 2];
const odd = (array: number[]): number => {
  let count: number = 0;

  for (let i: number = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      count++;
    }
  }
  console.log(count);
  return count;
};
odd(numberArray);
