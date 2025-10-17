import { describe, it, expect } from "vitest";
import { isValidStringLength } from "../src/stringValidator";

describe("stringValidator - Parameterized Test", () => {
  it.each([
    ["Hello Worl", "String is valid!"],
    ["Services", "String is valid!"],
    ["Perfect", "String is valid!"],
  ])("should validate string: %s (expected: %s)", (string, expectedResult) => {
    expect(isValidStringLength(string)).toBe(expectedResult);
  });
});
