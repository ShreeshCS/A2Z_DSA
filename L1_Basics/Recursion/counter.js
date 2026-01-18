// count 1 to N
// function oneToN(n) {
// 	if (n === 0) return;
// 	oneToN(n - 1);
// 	console.log(n);
// }

// oneToN(10);

// // count n to 1
// function nToOne(n) {
// 	if (n === 0) return;
// 	console.log(n);
// 	nToOne(n - 1);
// }
// nToOne(5);

// // Sum of first N numbers
// function sum(n) {
// 	if (Number.isNaN(n) || n === null) throw "Invalid input to Sum";
// 	if (n <= 0) throw "Input must be a positive number greater than zero";
// 	if (n === 1) return n;
// 	return sum(n - 1) + n;
// }

// reverse an array
function reverse(arr, index = 0) {
	if (index === arr.length - 1) {
		return [arr[index]];
	}
	const valueToPush = arr[index];
	const myArr = reverse(arr, index + 1);
	myArr.push(valueToPush);
	return myArr;
}

const res = reverse([1, 2, 3, 4, 5]);
console.log(res);
