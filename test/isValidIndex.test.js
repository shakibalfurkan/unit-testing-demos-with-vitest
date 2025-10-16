import { describe, it, expect } from "vitest";
import { isValidIndex } from "../src/isValidIndex";

describe("isValidIndex()", () => {
  const array = [10, 20, 30, 40];

  it("should allow index 0 (first element)", () => {
    const result = isValidIndex(array, 0);
    expect(result).toBe("Index is valid!");
  });

  it("should allow index 3 (last element)", () => {
    const result = isValidIndex(array, 3);

    expect(result).toBe("Index is valid!");
  });

  it("should throw an error for -1 index (out of bounds)", () => {
    expect(() => isValidIndex(array, -1)).toThrow("Index out of bounds");
  });

  it("should throw an error for 5 index (out of bounds)", () => {
    expect(() => isValidIndex(array, 5)).toThrow("Index out of bounds");
  });
});
