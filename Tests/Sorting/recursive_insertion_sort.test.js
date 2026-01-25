import { expect } from "chai";
import recInsertionSort from "../../Sorting/sorting_2/recursive_insertion_sort.js";

describe("recInsertionSort", () => {
	it("should sort an array of numbers in ascending order", () => {
		expect(recInsertionSort([5, 4, 3, 2, 1], 1)).to.deep.equal([
			1, 2, 3, 4, 5,
		]);
	});

	it("should handle an already sorted array", () => {
		expect(recInsertionSort([1, 2, 3, 4, 5], 1)).to.deep.equal([
			1, 2, 3, 4, 5,
		]);
	});

	it("should handle an array with duplicate values", () => {
		expect(recInsertionSort([3, 1, 2, 3, 1], 1)).to.deep.equal([
			1, 1, 2, 3, 3,
		]);
	});

	it("should handle an empty array", () => {
		expect(recInsertionSort([], 1)).to.deep.equal([]);
	});

	it("should handle an array with one element", () => {
		expect(recInsertionSort([42], 1)).to.deep.equal([42]);
	});

	it("should handle an array with negative numbers", () => {
		expect(recInsertionSort([-3, -1, -2, 0], 1)).to.deep.equal([
			-3, -2, -1, 0,
		]);
	});

	it("should handle an array with mixed positive and negative numbers", () => {
		expect(recInsertionSort([3, -2, 0, 1, -1], 1)).to.deep.equal([
			-2, -1, 0, 1, 3,
		]);
	});

	it("should handle an array with all identical elements", () => {
		expect(recInsertionSort([7, 7, 7, 7], 1)).to.deep.equal([7, 7, 7, 7]);
	});

	it("should handle a large array", () => {
		const arr = Array.from({ length: 100 }, (_, i) => 100 - i);
		const sorted = Array.from({ length: 100 }, (_, i) => i + 1);
		expect(recInsertionSort(arr, 1)).to.deep.equal(sorted);
	});
});
