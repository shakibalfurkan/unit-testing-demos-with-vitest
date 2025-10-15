import { describe, expect, it } from "vitest";
import {
  flattenArray,
  intersectArray,
  removeDuplicates,
} from "../src/arrayUtils";

describe("arrayUtils", () => {
  it("should flatten a nested array", () => {
    expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should find intersection of arrays", () => {
    expect(intersectArray([1, 2, 3, 4], [3, 6, 7])).toEqual([3]);
  });

  it("should remove duplicates from array", () => {
    expect(removeDuplicates([2, 2, 2, 3, 4, 5, 6, 7])).toEqual([
      2, 3, 4, 5, 6, 7,
    ]);
  });
});
