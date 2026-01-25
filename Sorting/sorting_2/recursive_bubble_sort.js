export function recBubbleSort(arr, n) {
	if (!n) return [];
	if (n === 1) return arr;

	let i = 0;
	while (i < n - 1) {
		if (arr[i] > arr[i + 1]) {
			[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
		}
		i++;
	}
	return recBubbleSort(arr, n - 1); // Ensure the sorted array is returned
}
