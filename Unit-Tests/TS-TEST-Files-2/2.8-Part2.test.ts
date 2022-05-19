import { it, expect } from "vitest";
import { findByWeight } from "../TS-Files-2/2.8-Part2";

it("should return if each element of the array is heavier", () => {
  const arr = [
    6,
    "value",
    1,
    undefined,
    null,
    { name: "john.doe", role: "admim" },
    "Test",
  ];
  const WEIGHT: number = 2;

  const result = findByWeight(arr, WEIGHT);
  expect(result).toBeTypeOf("boolean");
});
