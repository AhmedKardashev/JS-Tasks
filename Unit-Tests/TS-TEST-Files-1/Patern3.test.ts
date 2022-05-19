import { it, expect, vi, beforeEach, describe } from "vitest";
import { printPatent3 } from "../TS-Files-1/Patern3";

const logger = (word) => {
  console.log(word);
};
(window as any).global = window;

describe("console.log", () => {
  global.console = {
    log: vi.fn(),
    warn: vi.fn(),
    assert: vi.fn(),
    clear: vi.fn(),
    count: vi.fn(),
    countReset: vi.fn(),
    debug: vi.fn(),
    dir: vi.fn(),
    dirxml: vi.fn(),
    error: vi.fn(),
    group: vi.fn(),
    groupCollapsed: vi.fn(),
    groupEnd: vi.fn(),
    info: vi.fn(),

    table: vi.fn(),
    time: vi.fn(),
    timeEnd: vi.fn(),
    timeLog: vi.fn(),
    timeStamp: vi.fn(),
    trace: vi.fn(),
  };

  beforeEach(() => {
    window.console.log.mockReset();
  });
});
