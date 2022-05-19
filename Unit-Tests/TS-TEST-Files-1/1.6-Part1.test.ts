import { it, expect } from "vitest";

import { findTheLongestWord } from "../TS-Files-1/1.6-Part1";

it("should return the longest word without special characters", () => {
  const string = "What we do in life echoes to eternity!!!";

  const result = findTheLongestWord(string);

  expect(result).toBe("eternity");
});
