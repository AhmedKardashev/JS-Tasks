import { it, expect } from "vitest";
import { findByWeight } from "../TS-Files-2/2.8-Part2";

it("function must return true or false if all elements in the array have a higher weight than passed argument", () => {
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
