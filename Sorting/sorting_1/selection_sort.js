// Pseudo code - Selection Sort
/**
 * for i from 0 to n - 1:
    minIndex = i
    for j from i + 1 to n - 1:
        if array[j] < array[minIndex]:
            minIndex = j
    swap array[i] with array[minIndex]
 */

function selectionSort(arr = []) {
	if (!arr.length) return [];

	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}

	return arr;
}

export default selectionSort;
