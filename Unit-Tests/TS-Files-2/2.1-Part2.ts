//Part 2

let array: number[] = [6, 4, 3, 1, 9, 44, 33, 2];

export const sortArray = (array: number[]): number[] => {
  let temp: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    for (let j: number = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

console.log(sortArray(array));
