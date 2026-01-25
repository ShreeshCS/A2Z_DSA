function insertionSort(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		const key = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}

	return arr;
}

export default insertionSort;

/**
 * Note: Just blindly shift elements to the right until you find element > key
 */
