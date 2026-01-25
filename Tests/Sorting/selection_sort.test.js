import { expect } from "chai";
import selectionSort from "../../Sorting/sorting_1/selection_sort.js";

describe("selectionSort", () => {
	it("should sort an array of numbers in ascending order", () => {
		expect(selectionSort([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5]);
	});

	it("should handle an already sorted array", () => {
		expect(selectionSort([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
	});

	it("should handle an array with duplicate values", () => {
		expect(selectionSort([3, 1, 2, 3, 1])).to.deep.equal([1, 1, 2, 3, 3]);
	});

	it("should handle an empty array", () => {
		expect(selectionSort([])).to.deep.equal([]);
	});

	it("should handle an array with one element", () => {
		expect(selectionSort([42])).to.deep.equal([42]);
	});

	it("should handle an array with negative numbers", () => {
		expect(selectionSort([-3, -1, -2, 0])).to.deep.equal([-3, -2, -1, 0]);
	});

	it("should handle an array with mixed positive and negative numbers", () => {
		expect(selectionSort([3, -2, 0, 1, -1])).to.deep.equal([
			-2, -1, 0, 1, 3,
		]);
	});
});
