// 1423 -> 3241
// 12300 -> 321

function reverseNum(num) {
	if (!num) throw "number not defined";
	let zeroCount = Math.floor(Math.log10(Math.abs(num)));
	let reversed = 0;
	while (num >= 1) {
		reversed += (num % 10) * 10 ** zeroCount;
		num = Math.floor(num / 10);
		zeroCount--;
	}
	return reversed;
}

console.log(reverseNum(1234));
console.log(reverseNum(213400));
console.log(reverseNum());
