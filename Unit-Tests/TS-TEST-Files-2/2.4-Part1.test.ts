import { it, expect } from "vitest";
import { calculate } from "../TS-Files-2/2.4.-Part1";

it("should returns the sum of the elements in the array that have value higher than the number passed as argument", () => {
  const arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
  const higherThan: number = 4;
  const result = calculate(arr1, higherThan);

  expect(result).toBe(18);
  expect(result).toBeTypeOf("number");
});
