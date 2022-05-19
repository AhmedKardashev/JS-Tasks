import { it, expect } from "vitest";

import { getDate } from "../TS-Files-1/1.7";

it("should to show the date by format", () => {
  let date: Date = new Date();
  const result = getDate(date);

  expect(result).toBeTypeOf("string");
});
