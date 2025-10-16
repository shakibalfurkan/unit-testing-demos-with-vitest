import { expect } from "vitest";
import { it } from "vitest";
import { describe } from "vitest";
import { add } from "../src/math";

describe("math", () => {
  it("should add valid numbers", () => {
    expect(add(3, 5)).toBe(8);
    expect(add(4, 1)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  it("should throw if invalid numbers provided", () => {
    expect(() => add("3", 5)).toThrowError("Both inputs must be numbers");
    expect(() => add(0, null)).toThrowError("Both inputs must be number");
  });
});
