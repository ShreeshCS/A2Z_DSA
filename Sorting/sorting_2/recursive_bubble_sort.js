export function recBubbleSort(arr, n) {
	if (!n) return [];
	if (n === 1) return arr;

	let i = 0;
	let isSwapped = false;
	while (i < n - 1) {
		if (arr[i] > arr[i + 1]) {
			[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
			isSwapped = true;
		}
		i++;
	}
	if (!isSwapped) return arr;
	return recBubbleSort(arr, n - 1); // Ensure the sorted array is returned
}
