function isarmstrong(num) {
	const digitCount = Math.floor(Math.log10(Math.abs(num))) + 1;
	const myNum = num;
	let arm = 0;
	while (num > 0) {
		arm += (num % 10) ** digitCount;
		num = Math.floor(num / 10);
	}
	console.log(arm === myNum);
}

isarmstrong(153);
