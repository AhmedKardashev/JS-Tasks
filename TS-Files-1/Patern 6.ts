const maxNumber: number = 5;
let row: string = "";
let i: number, j: number, k: number, m: number;

const sixthPattern = (): string => {
  let k: number = 11,
    l: number = 28,
    m: number = 36;
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      if (i == 1) {
        row += "  " + j + " ";
      } else if (j == 10) {
        row += " " + k++ + " ";
      } else if (i == 10) {
        row += " " + l-- + " ";
      } else if (j == 1) {
        row += " " + m-- + " ";
      } else row += "    ";
    }
    row += "\n";
  }
  return row;
};
console.log(sixthPattern());
