import { expect } from "chai";
import { recBubbleSort } from "../../Sorting/sorting_2/recursive_bubble_sort.js";

describe("recBubbleSort", () => {
	function callSort(arr) {
		// Helper to call with correct n and return result
		return recBubbleSort([...arr], arr.length);
	}

	it("should sort an array of numbers in ascending order", () => {
		expect(callSort([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5]);
	});

	it("should handle an already sorted array", () => {
		expect(callSort([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
	});

	it("should handle an array with duplicate values", () => {
		expect(callSort([3, 1, 2, 3, 1])).to.deep.equal([1, 1, 2, 3, 3]);
	});

	it("should handle an empty array", () => {
		expect(callSort([])).to.deep.equal([]);
	});

	it("should handle an array with one element", () => {
		expect(callSort([42])).to.deep.equal([42]);
	});

	it("should handle an array with negative numbers", () => {
		expect(callSort([-3, -1, -2, 0])).to.deep.equal([-3, -2, -1, 0]);
	});

	it("should handle an array with mixed positive and negative numbers", () => {
		expect(callSort([3, -2, 0, 1, -1])).to.deep.equal([-2, -1, 0, 1, 3]);
	});
});
