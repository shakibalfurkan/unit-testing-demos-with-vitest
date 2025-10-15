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
