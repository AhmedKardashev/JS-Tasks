import { it, expect } from "vitest";

import { calculate } from "../TS-Files-2/2.4-Part2";

it("should return a new array with numbers divisible to a given number", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const divisible = 2;

  const result = calculate(array, divisible);

  expect(result).toEqual([2, 4, 6, 8]);
});
