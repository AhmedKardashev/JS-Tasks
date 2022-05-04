// задача:Patern4

const Patern4 = (n: number): void => {
  let string: string = "";
  // Upside pyramid
  for (let i: number = 1; i <= n; i++) {
    // printing spaces
    for (let j: number = n; j >= i; j--) {
      string += " ";
    }
    // printing k
    for (let k: number = 1; k <= i; k++) {
      string += `${k} `;
    }
    string += "\n";
  }
  //

  for (let i: number = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j: number = 0; j <= i; j++) {
      string += " ";
    }
    // printing k
    for (let k: number = 1; k <= n - i; k++) {
      string += `${k} `;
    }
    string += "\n";
  }
  console.log(string);
};
Patern4(5);
