/**
 * Time Complexity: O(log₁₀n)
 * - The while loop runs until n becomes less than 1
 * - Each iteration divides n by 10
 * - For a number n, it takes log₁₀n iterations to reach 1
 *
 * Space Complexity: O(1)
 * - Only uses a single counter variable regardless of input size
 *
 * Examples:
 * (4123) -> '4'   // takes log₁₀(4123) ≈ 4 iterations
 * (412315) -> '6' // takes log₁₀(412315) ≈ 6 iterations
 *
 * Note: For number n with d digits:
 * - n ∈ [10^(d-1), 10^d - 1]
 * - iterations = ⌊log₁₀n⌋ + 1 = number of digits
 */

function countDigits(n) {
	let count = 0;
	while (n >= 1) {
		n = n / 10;
		count++;
	}
	console.log(count);
}

countDigits(1234);

countDigits(0);

countDigits(1);

countDigits(0.12);

countDigits(0.0);

/**
 * Counts digits in a number using logarithm (more efficient than iteration)
 *
 * How it works:
 * 1. For a d-digit number n:
 *    - n lies between 10^(d-1) and 10^d - 1
 *    - Example: 3-digit numbers are between 10² (100) and 10³-1 (999)
 *
 * 2. Therefore:
 *    - log₁₀(n) will give a number between (d-1) and d
 *    - Example: log₁₀(100) = 2, log₁₀(999) ≈ 2.999
 *
 * 3. Math.floor(log₁₀(n)) gives (d-1)
 *    - Adding 1 gives us the digit count
 *
 * Edge cases handled:
 * - n = 0: log₁₀(0) is -Infinity, so we handle it separately
 * - negative numbers: we use Math.abs()
 *
 * Time complexity: O(1) - single mathematical operation
 * Space complexity: O(1) - no extra space needed
 *
 * @param {number} n - The number to count digits in
 * @returns {number} The count of digits
 */
function countDigitsUsingLog(n) {
	// Special case: log(0) is -Infinity
	if (n === 0) return 1;

	// Math.abs handles negative numbers
	// Math.log10 gets base-10 logarithm
	// Math.floor removes decimal part
	// Add 1 because log10 gives (digits - 1)
	return Math.floor(Math.log10(Math.abs(n))) + 1;
}

// Test cases with explanations
console.log(countDigitsUsingLog(1234)); // 4  (log₁₀(1234) ≈ 3.091, floor + 1 = 4)
console.log(countDigitsUsingLog(0)); // 1  (special case)
console.log(countDigitsUsingLog(1)); // 1  (log₁₀(1) = 0, floor + 1 = 1)
console.log(countDigitsUsingLog(999999)); // 6  (log₁₀(999999) ≈ 5.999, floor + 1 = 6)
