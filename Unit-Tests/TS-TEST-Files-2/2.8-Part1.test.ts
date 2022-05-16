import { it, expect } from "vitest";
import { findByWeight } from "../TS-Files-2/2.8-Part1";

it("The function must return true or false if there is an element in the array that has the same weight ", () => {
  const arr: any[] = [
    6,
    "value",
    1,
    undefined,
    null,
    { name: "john.doe", role: "admim" },
    "Test",
  ];

  const WEIGHT: number = 26;

  const result = findByWeight(arr, WEIGHT);
  expect(result).toBeTypeOf("boolean");
});
