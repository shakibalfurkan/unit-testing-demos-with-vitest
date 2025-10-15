import { describe, it, expect } from "vitest";

import { add, subtract, multiply, divide } from "../src/mathUtils";

describe("Math Utilities", () => {
  it("should return sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should subtract one number from another", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("should multiply two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 3)).toBe(-6);
  });

  it("should divide one number by another", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
  });

  it("should throw error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
