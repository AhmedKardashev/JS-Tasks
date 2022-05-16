import { it, expect } from "vitest";
import { heaviness } from "./TS-Files-1/1.5-Part1";

it("should return the weight of all items", () => {
  const object = { cards: 6, label: "Test", description: "value", type: 1 };

  const result = heaviness(object);

  expect(result).toBeTypeOf("number");
  expect(result).toBe(24);
});
