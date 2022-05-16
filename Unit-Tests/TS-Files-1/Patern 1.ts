//  задача: Patent 1
const printPatterOne = (n: number): void => {
  for (let i: number = 1; i <= n; i++) {
    let result: string = "";
    for (let k = 1; k <= i; k++) {
      result += " " + k;
    }
    console.log(result);
  }
};
printPatterOne(5);
