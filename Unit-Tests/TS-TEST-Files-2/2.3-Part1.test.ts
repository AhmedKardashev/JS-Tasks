import { it, expect } from "vitest";
import { appender } from "../TS-Files-2/2.3-Part1";

it("should if the index is even it adds Array type, if it is uneven we add object ", () => {
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
