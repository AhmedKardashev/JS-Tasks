import { it, expect } from "vitest";
import { appender } from "../TS-Files-2/2.3-Part2";

it("", () => {
  const arr1: any[] = [
    [1, 2, 3, 4],
    ["one", "two"],
    [5, 6],
  ];

  const arr2: any[] = [
    null,
    ,
    ["one", "five"],
    { role: "admin" },
    { name: "John" },
    [1000, 1001],
  ];
  const result = appender(arr1, arr2);

  expect(result).toEqual([
    [1, 2, 3, 4, "one", "five", 1000, 1001],
    ["one", "two", null, { role: "admin" }, { name: "John" }],
    [5, 6, "one", "five", 1000, 1001],
  ]);
});
