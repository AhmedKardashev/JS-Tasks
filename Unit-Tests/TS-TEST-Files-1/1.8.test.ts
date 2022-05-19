import { it, expect, describe } from "vitest";

import { diffTimeBetweenDate, bankersRound } from "../TS-Files-1/1.8";

describe("diffTimeBetweenDate()", () => {
  it("should show the differences between the dates", () => {
    const oldDate: Date = new Date(2022, 5, 13, 4, 19, 0, 345);
    const newDate: Date = new Date();

    const result = diffTimeBetweenDate(oldDate, newDate);

    expect(result).toBeTypeOf("string");
  });
});

describe("bankersRound()", () => {
  it("should return number", () => {
    const num = 1;

    const result = bankersRound(num);

    expect(result).toBeTypeOf("number");
  });
});
