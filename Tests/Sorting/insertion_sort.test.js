import { expect } from "chai";
import insertionSort from "../../Sorting/sorting_1/insertion_sort.js";

describe("insertionSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    expect(insertionSort([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should handle an already sorted array", () => {
    expect(insertionSort([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should handle an array with duplicate values", () => {
    expect(insertionSort([3, 1, 2, 3, 1])).to.deep.equal([1, 1, 2, 3, 3]);
  });

  it("should handle an empty array", () => {
    expect(insertionSort([])).to.deep.equal([]);
  });

  it("should handle an array with one element", () => {
    expect(insertionSort([42])).to.deep.equal([42]);
  });

  it("should handle an array with negative numbers", () => {
    expect(insertionSort([-3, -1, -2, 0])).to.deep.equal([-3, -2, -1, 0]);
  });

  it("should handle an array with mixed positive and negative numbers", () => {
    expect(insertionSort([3, -2, 0, 1, -1])).to.deep.equal([-2, -1, 0, 1, 3]);
  });
});
