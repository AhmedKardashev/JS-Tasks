import { it, expect, describe } from "vitest";

import { findObj } from "../TS-Files-2/2.2-Part1";
describe("findObj()", () => {
  it("find given objet in an array ", () => {
    const person = { name: "John Doe" };

    let array: any[] = [
      6,
      "Test",
      "value",
      person,
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      { name: "John Doe" },
    ];

    const result = findObj(array, person);

    expect(result).toBe(true);
  });

  it("find given objet in an array", () => {
    const person = { name: "John Doe" };

    let array: any[] = [
      6,
      "Test",
      "value",
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      { name: "John Doe" },
    ];

    const result = findObj(array, person);

    expect(result).toBe(false);
  });

  it("find given objet in an array", () => {
    const person = { name: "John Doe" };

    let array: any[] = [
      6,
      "Test",
      "value",
      person,
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      { name: "John Doe" },
    ];

    const result = findObj(array, person);

    expect(result).not.toBe(undefined);
  });
  it("find given objet in an array ", () => {
    const person = { name: "John Doe" };

    let array: any[] = [
      6,
      "Test",
      "value",
      person,
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      { name: "John Doe" },
    ];

    const result = findObj(array, person);

    expect(result).toBe(true);
  });

  it("find given objet in an array", () => {
    const person = { name: "John Doe" };

    let array: any[] = [
      6,
      "Test",
      "value",
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      { name: "John Doe" },
    ];

    const result = findObj(array, person);

    expect(result).toBe(false);
  });

  it("find given objet in an array", () => {
    const person = { name: "John Doe" };

    let array: any[] = [
      6,
      "Test",
      "value",
      person,
      1,
      undefined,
      null,
      () => {
        console.log("Hello,  world!");
      },
      { count: 5 },
      { name: "John Doe" },
    ];

    const result = findObj(array, person);

    expect(result).not.toBe(undefined);
  });
});
