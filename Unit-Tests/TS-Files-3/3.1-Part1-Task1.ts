const arrr: number[] = [6, 4, 3, 1, 9, 44, 33, 2];
interface Array<T> {
  odd(): number;
}
Array.prototype.odd = function () {
  let count: number = 0;

  for (let i: number = 0; i < this.length; i++) {
    if (i % 2 == 0) {
      count++;
    }
  }
  console.log(count);
  return count;
};
arrr.odd();
