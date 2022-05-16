//  задача: Patern 2
const printPatterRerverse2 = (n: number): void => {
  let result: string;
  for (let k: number = n - 1; k >= 1; k--) {
    result = "";
    for (let r: number = 1; r <= k; r++) {
      result += " " + r;
    }
    console.log(result);
  }
};

const printPatter2 = (n: number): void => {
  let result: string;
  for (let i: number = 1; i <= n; i++) {
    result = "";
    for (let j: number = 1; j <= i; j++) {
      result += " " + j;
    }
    console.log(result);
  }

  printPatterRerverse2(n);
};
printPatter2(5);
