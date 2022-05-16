//Part 1

let arr: number[] = [6, 4, 3, 1, 9, 44, 33, 2];

export const bubbleSort = (inputArr: number[]): number[] => {
  let len: number = inputArr.length;
  for (let i: number = 0; i < len; i++) {
    for (let j: number = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp: number = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

console.log(bubbleSort(arr));
