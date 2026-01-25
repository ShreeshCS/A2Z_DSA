function recInsertionSort(arr, i) {
	if (arr.length === 0) return [];
	if (i === arr.length) return arr;

	let key = arr[i];
	let j = i - 1;
	while (arr[j] > arr[j + 1]) {
		[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
		j--;
	}
	arr[j + 1] = key;

	return recInsertionSort(arr, i + 1);
}

export default recInsertionSort;
