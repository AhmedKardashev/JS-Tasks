import { it, expect } from "vitest";
import { countArray } from "./TS-Files-1/1.4";

it("should count all types in an array", () => {
  const array = [6, "Test", undefined];

  const result = countArray(array);

  expect(result).toBeTypeOf("object");
  expect(result).toEqual({
    nullCount: 0,
    objectsCount: 0,
    stringsCount: 1,
    numberCount: 1,
    undefinedCount: 1,
    functionCount: 0,
    booleanCount: 0,
    arrayCount: 0,
    dataCount: 0,
  });
});
