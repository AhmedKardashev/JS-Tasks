// задача: Patern 3
export const printPatent3 = (n: number): void => {
  let i: number, j: number, k: number, result: string;
  for (i = 1; i <= n; i++) {
    result = "";
    for (k = 1; k <= i; k++) {
      result += " " + k;
    }

    for (j = i - 1; j >= 1; j--) result += " " + j;

    console.log(result);
  }
};
printPatent3(5);
