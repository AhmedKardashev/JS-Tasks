import { it, expect } from "vitest";
import { tokenFill, padZero } from "./TS-Files-1/1.9";

it("should to replace tokens with a function to show the given format", () => {
  const myDate: Date = new Date();
  const customString: string = "MM";

  const tokens = {
    YYYY: (date: Date) => date.getFullYear(),
    MM: (date: Date) => padZero(date.getMonth() + 1),
    M: (date: Date) => date.getMonth() + 1,
    DD: (date: Date) => padZero(date.getDate()),
    D: (date: Date) => date.getDate(),
    HH: (date: Date) => padZero(date.getHours()),
    H: (date: Date) => date.getHours(),
    mm: (date: Date) => padZero(date.getMinutes()),
    m: (date: Date) => date.getMinutes(),
    ss: (date: Date) => padZero(date.getSeconds()),
    s: (date: Date) => date.getSeconds(),
  };

  const result = tokenFill(myDate, customString);

  expect(result).toEqual("04");
});
