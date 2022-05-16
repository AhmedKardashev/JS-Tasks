//Task 1.6
//Part1:

let string = "What we do in life echoes to eternity!";

export const findTheLongestWord = (string: string): string => {
  let max: string = "";
  let i: number;

  let splitSting: string[] = string.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
  console.log(splitSting);
  for (i = 0; i < splitSting.length; i++) {
    if (splitSting[i].length > max.length) {
      max = splitSting[i];
    }
  }

  return max;
};

console.log(findTheLongestWord(string));
