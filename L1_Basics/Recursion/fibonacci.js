function printFibo(n, a = 0, b = 1, result = []) {
	if (n < 0) return;
	if (n === 0) {
		result.push(a);
		console.log(result.join(" "));
		return;
	}
	result.push(a);
	printFibo(n - 1, b, a + b, result);
}

printFibo(1);
