function countFrequency(arr, q) {
	const map = new Map();
	for (let val of arr) {
		map[val] ? map[val]++ : (map[val] = 1);
	}
	return map[q];
}

console.log(countFrequency([1, 2, 1, 3, 4, 5, 3, 3], 1));
console.log(countFrequency([1, 2, 1, 3, 4, 5, 3, 3], 2));
console.log(countFrequency([1, 2, 1, 3, 4, 5, 3, 3], 3));
console.log(countFrequency([1, 2, 1, 3, 4, 5, 3, 3], 9));

// finding the highest and lowest frequency elements
function func(arr) {
	const map = new Map();
	for (let val of arr) {
		map[val] ? map[val]++ : (map[val] = 1);
	}
	let maxFreq = 0;
	let minFreq = arr.length;
	let maxfNum;
	let minfNum;
	for (let val of arr) {
		if (map[val] > maxFreq) {
			maxfNum = val;
			maxFreq = map[val];
		}
		if (map[val] < minFreq) {
			minfNum = val;
			minFreq = map[val];
		}
	}
	return [maxfNum, minfNum];
}

console.log(func([1, 2, 2, 1, 3, 3, 4, 4, 5, , 1, 1]));
