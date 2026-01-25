import { expect } from "chai";
import quickSort from "../../Sorting/sorting_2/quick_sort.js";

function callQuickSort(arr) {
  if (arr.length === 0) return [];
  const copy = [...arr];
  quickSort(copy, 0, copy.length - 1);
  return copy;
}

describe("quickSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    expect(callQuickSort([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should handle an already sorted array", () => {
    expect(callQuickSort([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should handle an array with duplicate values", () => {
    expect(callQuickSort([3, 1, 2, 3, 1])).to.deep.equal([1, 1, 2, 3, 3]);
  });

  it("should handle an empty array", () => {
    expect(callQuickSort([])).to.deep.equal([]);
  });

  it("should handle an array with one element", () => {
    expect(callQuickSort([42])).to.deep.equal([42]);
  });

  it("should handle an array with negative numbers", () => {
    expect(callQuickSort([-3, -1, -2, 0])).to.deep.equal([-3, -2, -1, 0]);
  });

  it("should handle an array with mixed positive and negative numbers", () => {
    expect(callQuickSort([3, -2, 0, 1, -1])).to.deep.equal([-2, -1, 0, 1, 3]);
  });

  it("should handle an array with all identical elements", () => {
    expect(callQuickSort([7, 7, 7, 7])).to.deep.equal([7, 7, 7, 7]);
  });

  it("should handle a large array", () => {
    const arr = Array.from({ length: 100 }, (_, i) => 100 - i);
    const sorted = Array.from({ length: 100 }, (_, i) => i + 1);
    expect(callQuickSort(arr)).to.deep.equal(sorted);
  });
});
