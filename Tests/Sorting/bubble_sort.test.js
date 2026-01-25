import { expect } from "chai";
import sinon from "sinon";
import bubbleSort from "../../Sorting/sorting_1/bubble_sort.js";
// Import the bubbleSort function

// Helper to silence console.log during tests
beforeEach(() => {
	sinon.stub(console, "log");
});
afterEach(() => {
	console.log.restore();
});

describe("bubbleSort", () => {
	it("should sort an array of numbers in ascending order", () => {
		expect(bubbleSort([5, 4, 3, 2, 1])).to.deep.equal([1, 2, 3, 4, 5]);
	});

	it("should handle an already sorted array", () => {
		expect(bubbleSort([1, 2, 3, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
	});

	it("should handle an array with duplicate values", () => {
		expect(bubbleSort([3, 1, 2, 3, 1])).to.deep.equal([1, 1, 2, 3, 3]);
	});

	it("should handle an empty array", () => {
		expect(bubbleSort([])).to.deep.equal([]);
	});

	it("should handle an array with one element", () => {
		expect(bubbleSort([42])).to.deep.equal([42]);
	});

	it("should handle an array with negative numbers", () => {
		expect(bubbleSort([-3, -1, -2, 0])).to.deep.equal([-3, -2, -1, 0]);
	});

	it("should handle an array with mixed positive and negative numbers", () => {
		expect(bubbleSort([3, -2, 0, 1, -1])).to.deep.equal([-2, -1, 0, 1, 3]);
	});
});
