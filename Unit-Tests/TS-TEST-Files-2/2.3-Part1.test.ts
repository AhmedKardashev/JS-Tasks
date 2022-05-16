import { it, expect } from "vitest";
import { appender } from "../TS-Files-2/2.3-Part1";

it(" should add the truthy values from the second array in the first nested array of first array ", () => {
  const arr1: any[] = [1, undefined, [1, 2, 3], "test", { name: "John Doe" }];

  const arr2: any[] = [null, ["one", "five"], undefined, 6];

  const result = appender(arr1, arr2);

  expect(result).toEqual([
    1,
    undefined,
    [1, 2, 3, ["one", "five"], 6],
    "test",
    { name: "John Doe" },
  ]);
});
