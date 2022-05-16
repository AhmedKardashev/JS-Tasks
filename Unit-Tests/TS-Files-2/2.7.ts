const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface RandomSize {
  (p1: number[]): number[];
}
export const randomize: RandomSize = (array) => {
  const randomlySortedArray: number[] = array.sort(() => 0.5 - Math.random());
  console.log(randomlySortedArray);
  let result = [];
  let tempArray: number[] = [];
  let theLongestNumberLine: number[] = [];
  for (let i: number = 0; i < randomlySortedArray.length; i++) {
    if (randomlySortedArray[i] < randomlySortedArray[i + 1]) {
      tempArray.push(randomlySortedArray[i]);
    } else if (randomlySortedArray[i] > randomlySortedArray[i + 1]) {
      tempArray.push(randomlySortedArray[i]);
      result.push(tempArray);
      tempArray = [];
    } else {
      tempArray.push(randomlySortedArray[i]);
      result.push(tempArray);
      tempArray = [];
    }
  }
  for (let k: number = 0; k < result.length; k++) {
    if (theLongestNumberLine.length < result[k].length) {
      theLongestNumberLine = result[k];
    }
  }

  return theLongestNumberLine;
};

console.log(randomize(array));
