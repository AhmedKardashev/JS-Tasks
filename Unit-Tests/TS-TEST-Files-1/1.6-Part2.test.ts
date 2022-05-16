import { it, expect } from "vitest";

import { findTheLongestWord } from "./TS-Files-1/1.6-Part2";

it("should return the longest word without special characters starting with a character` ", () => {
  const string = "What we do in life echoes to eternity!!!";
  const char = "e";

  const result = findTheLongestWord(string, char);

  expect(result).toBe("eternity");
});
