interface Array<T> {
  sortArray(fn: Function): (number | string)[];
}
Array.prototype.sortArray = function (fn) {
  const len: number = array.length;

  for (let i: number = 0; i < len; i++) {
    for (let j: number = 0; j < len - 1; j++) {
      if (!fn(array[j], array[j + 1])) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const array = [6, 4, 3, 51, 1, 9, 44, 33, 2, "ss", "s"];
const fn = (left: number, right: number): boolean => {
  return left < right;
};

array.sortArray(fn);
console.log(array);
