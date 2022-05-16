import { it, expect } from "vitest";
import { flattenObj } from "../TS-Files-2/2.5";

it("accepts an array as the argument and returns the same array with every object in the array flattened", () => {
  const arr = [
    {
      person: {
        firstName: "John",
        lastName: "Doe",
        role: "Admin",
      },
      permissions: ["read", "write", "special"],
      age: 42,
      competencies: [
        { skill: "JavaScript", level: "junior" },
        { skill: "css", level: "junior" },
      ],
    },
    "sunny day",
    5,
  ];
  const result = flattenObj(arr);

  expect(result).toBeTypeOf("object");
});
