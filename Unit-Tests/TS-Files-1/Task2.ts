// Task 2:

const array1: number[] = [6, 4, 3, 1, 9, 44, 33, 2];

let bubbleSort = (inputArr: number[]): number[] => {
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
  console.log(inputArr);
  return inputArr;
};

bubbleSort(array1);