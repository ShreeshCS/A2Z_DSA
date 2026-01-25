function quickSort(arr, low = 0, high = arr.length - 1) {
	if (low < high) {
		const pivotIndex = partition(arr, low, high);
		quickSort(arr, low, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, high);
	}
	return arr;
}

function partition(arr, low, high) {
	let pivot = arr[high];
	let i = low - 1;
	let j = low;

	while (j < high) {
		if (arr[j] < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		j++;
	}
	[arr[high], arr[i + 1]] = [arr[i + 1], arr[high]];
	return i + 1;
}

export default quickSort;

/**
 * Pure javascript Quick sort
 * 
 * function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  const equal = arr.filter(x => x === pivot);
  return [...quickSort(left), ...equal, ...quickSort(right)];
}
 */
