import { it, expect } from "vitest";
import { Clock } from "../TS-Files-3/3,4";

it("Clock to show the showTime() call ", () => {
  const format = "YYYY-MM-DD HH:mm:ss Is my proof of concept!";
  const timeZone = "Asia/Shanghai";

  const testClock = new Clock();
  testClock.showTime(format, timeZone);

  expect(testClock.showTime).toBeCalled;
});
