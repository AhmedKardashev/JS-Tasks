const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const percentage: number = 50;

interface RemoveInner {
  (p1: number[], p2: number): number[];
}

export const removeInner: RemoveInner = (arr, percent) => {
  const arrLength: number = arr.length;
  let calculatePercentage: number = (percent / 100) * arrLength;
  const calculateMiddle: number = Math.floor(calculatePercentage / 2);
  console.log(calculateMiddle);
  return [...arr.slice(0, calculateMiddle), ...arr.slice(-calculateMiddle)];
};
console.log(removeInner(arr, percentage));
