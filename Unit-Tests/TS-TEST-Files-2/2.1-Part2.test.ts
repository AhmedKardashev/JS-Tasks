import { it, expect } from "vitest";

import { sortArray } from "../TS-Files-2/2.1-Part2";
import { bubbleSort } from "../TS-Files-2/2.1-Part1";

it("should sort the array with min-max sort", () => {
  const array = [1, 3, 2, 5, 11, 23, 7];

  const result = sortArray(array);
  const expectResult = bubbleSort(array);

  expect(result).toBe(expectResult);
});
