// Pattern 7

const maxNumber: number = 5;
let row: string = "";
let i: number, j: number, k: number, m: number;

const seventhPattern = (maxNumber: number): string => {
  let array: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  let n: number = 1;
  let low: number = 0,
    high: number = 9;

  for (i = 0; i < maxNumber; i++, low++, high--) {
    for (j = low; j <= high; j++, n++) {
      array[i][j] = n;
    }
    for (j = low + 1; j <= high; j++, n++) {
      array[j][high] = n;
    }
    for (j = high - 1; j >= low; j--, n++) {
      array[high][j] = n;
    }
    for (j = high - 1; j > low; j--, n++) {
      array[j][low] = n;
    }
  }

  for (i = 0; i < 10; i++) {
    row += "\n";
    for (j = 0; j < 10; j++) {
      row += " " + array[i][j] + " ";
    }
  }
  row += "\n";
  return row;
};

console.log(seventhPattern(maxNumber));
