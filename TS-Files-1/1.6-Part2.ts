//Task 1.6
//Part 2:
let string: string = "What we do in life echoes to eternity!";

const findTheLongestWord = (string: string, char: string): string => {
  let max: string = "";
  let secondSplitString: string[];

  let i: number;
  let splitSting: string[] = string.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
  console.log(splitSting);
  for (i = 0; i < splitSting.length; i++) {
    if (splitSting[i].length > max.length) {
      secondSplitString = splitSting[i].split("");

      if (secondSplitString[0] == char) {
        max = splitSting[i];
      }
    }
  }

  return max;
};

console.log(findTheLongestWord(string, "e"));
