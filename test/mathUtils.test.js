import { describe, it, expect } from "vitest";

import { add, subtract, multiply, divide } from "../src/mathUtils";

describe("Math Utilities", () => {
  it("should return sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
