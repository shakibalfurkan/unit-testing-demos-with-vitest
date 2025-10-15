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
