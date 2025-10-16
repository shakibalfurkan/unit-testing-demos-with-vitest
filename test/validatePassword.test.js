import { validatePassword } from "../src/validatePassword";
import { describe, expect, it } from "vitest";

describe("validatePassword()", () => {
  it("should allow a password with 8 characters", () => {
    expect(validatePassword("12345678")).toBe("Password is valid");
  });

  it("Should throw an error if password has less then 8 characters", () => {
    expect(() => validatePassword("123456")).toThrow(
      "Password must be between 8 and 16 character"
    );
  });

  it("Should allow a password with exactly 16 characters", () => {
    const result = validatePassword("1234567890123456");
    expect(result).toBe("Password is valid");
  });

  it("should throw an error if password has more then 16 characters", () => {
    expect(() => validatePassword("1234567890123456789")).toThrow(
      "Password must be between 8 and 16 character"
    );
  });
});
