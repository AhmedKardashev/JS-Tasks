const arr: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23,
];
const percentage: number = 50;

interface RemoveInner {
  (p1: number[], p2: number): number[];
}
const removeInner: RemoveInner = (arr, percent) => {
  const arrLength: number = arr.length;

  let calculatePercentage: number = (percent / 100) * arrLength;
  console.log(calculatePercentage);
  const elementsOnEachEnd: number = Math.ceil(
    (arrLength - calculatePercentage) / 2
  );

  console.log(elementsOnEachEnd);

  return [...arr.slice(0, elementsOnEachEnd), ...arr.slice(-elementsOnEachEnd)];
};

console.log(removeInner(arr, percentage));
