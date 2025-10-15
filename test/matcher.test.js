// toBe: check for strick equality, === , meaning both values must be the same type and value.

import { it, expect } from "vitest";

it("toBe matcher", () => {
  const result = 5;
  expect(result).toBe(5);
});

// toEqual: check for deep equality : it compares the values by checking the content of objects or arrays, not just there reference checking

it("toEqual matcher", () => {
  const obj1 = { name: "shakib", age: 19 };
  const obj2 = { name: "shakib", age: 19 };

  expect(obj1).toEqual(obj2);
});

// toStrictEqual: check equality deeply just like toEqual(), but also consider properties like undefined, function and other types that are not strict in certain cases.

it("toStrictEqual", () => {
  const obj1 = { name: "shakib", age: 19 };
  const obj2 = { name: "shakib", age: 19 };

  expect(obj1).toStrictEqual(obj2);
});

// toBeTruthy: checks is the value is true or not

it("toBeTruthy matcher", () => {
  const value = 1;
  expect(value).toBeTruthy();
});

// toBeFalsy: checks is the value is false or not

it("toBeFalsy matcher", () => {
  const value = "";
  expect(value).toBeFalsy();
});

// toBeGreaterThan: check is the expected value greater than from given value or not
it("toBeGreaterThan", () => {
  const value = 10;
  expect(value).toBeGreaterThan(5);
});

// toBeLessThan: check is the expected value less than from given value or not
it("toBeLessThan", () => {
  const value = 1;
  expect(value).toBeLessThan(5);
});
// toBeLessThanOrEqual: check is the expected value less than from given value or equal
it("toBeLessThan", () => {
  const value = 1;
  expect(value).toBeLessThanOrEqual(5);
});

// toContain: checks if a value is present within an array, string, or iterable.
it("toContain", () => {
  const string = "Hello, world";
  expect(string).toContain("Hell");
});

// toMatch: checks if a value is present within an array, string, or iterable.
it("toMatch", () => {
  const string = "Hello, world";
  expect(string).toMatch(/world/);
});
