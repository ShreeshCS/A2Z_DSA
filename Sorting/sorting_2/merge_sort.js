function mergeSort(arr, low, high) {
	if (low >= high) return;
	let mid = Math.floor((low + high) / 2);
	mergeSort(arr, low, mid);
	mergeSort(arr, mid + 1, high);

	merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
	let left = low;
	let right = mid + 1;
	let temp = [];

	while (left <= mid && right <= high) {
		if (arr[left] < arr[right]) {
			temp.push(arr[left]);
			left++;
		} else {
			temp.push(arr[right]);
			right++;
		}
	}

	while (left <= mid) {
		temp.push(arr[left]);
		left++;
	}

	while (right <= high) {
		temp.push(arr[right]);
		right++;
	}

	//arrange temp into arr
	for (let i = low; i <= high; i++) {
		arr[i] = temp[i - low];
	}
}

export default mergeSort;

/**
 * If the merge cost was O(n²), what would the total time complexity of merge sort be?
 * 
 * If the merge step were O(n²), the recurrence would be
 * T(n)=2T(n/2)+O(n²)
 * The root of the recursion tree would dominate the total cost, and the overall time complexity would be O(n²)
 * 
 * Why This Insight Matters (Big Picture)


This explains why merge sort’s efficiency lives or dies by the merge step.

Linear merge → O(n log n) ✅

Quadratic merge → O(n²) ❌ (same as bubble/selection sort)
 */
