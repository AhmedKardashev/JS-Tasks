import { it, expect, describe } from "vitest";
import {
  componentToLongHex,
  componentToShortHex,
  rgbToLongHex,
  rgbToShortHex,
} from "../TS-Files-3/3,3";

import { Color } from "../TS-Files-3/3,3";

describe("componentToLongHex()", () => {
  it("componentToLongHex(),should return the component to long hex", () => {
    const c = 14;

    const result = componentToLongHex(c);

    expect(result).toBe("0e");
  });
});

describe("componentToShortHex()", () => {
  it("componentToShortHex(),should return the component to short hex", () => {
    const c = 14;

    const result = componentToShortHex(c);

    expect(result).toBe("e");
  });
});

describe("rgbToLongHex()", () => {
  it("should return the RGB to long hex", () => {
    const r = 14;
    const g = 140;
    const b = 200;

    const result = rgbToLongHex(r, g, b);

    expect(result).toBe("#0e8cc8");
  });
});

describe("rgbToShortHex()", () => {
  it("should return the RGB to short hex", () => {
    const r = 14;
    const g = 140;
    const b = 200;

    const result = rgbToShortHex(r, g, b);

    expect(result).toBe("#e8c");
  });
});

describe("Color", () => {
  it("should contain the provided r,g and b ", () => {
    const red = 14;
    const green = 140;
    const blue = 200;

    const testClass = new Color(red, green, blue);

    expect(testClass.r).toBe(14);
    expect(testClass.g).toBe(140);
    expect(testClass.b).toBe(200);
  });
});
