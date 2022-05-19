import { it, expect } from "vitest";
import { bubbleSort } from "../TS-Files-2/2.1-Part1";

it("should sort the array with bubble sort", () => {
  const arr: number[] = [6, 4, 3, 1, 9, 2];

  const result = bubbleSort(arr);

  expect(result).toEqual([1, 2, 3, 4, 6, 9]);
});
