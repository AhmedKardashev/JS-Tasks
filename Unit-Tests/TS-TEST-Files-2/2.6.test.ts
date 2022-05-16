import { it, expect } from "vitest";
import { removeInner } from "../TS-Files-2/2.6";

it("should remove inner precentage of numbers of an array", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const percent = 50;

  const result = removeInner(array, percent);

  expect(result).toEqual([1, 2, 3, 10, 11, 12]);
});
