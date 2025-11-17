function prints(val) {
	process.stdout.write(val);
}

(function pattern1(n) {
	console.log("pattern1");
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			prints("*"); // Print inline
		}
		prints("\n"); // Move to the next line after each row
	}
})(5);
console.log("------------------------------");

(function pattern2(n) {
	console.log("pattern2");
	for (let i = 0; i < n; i++) {
		for (let j = 0; j <= i; j++) {
			prints("*");
		}
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern3(n) {
	console.log("pattern3");
	for (let i = 0; i < n; i++) {
		for (let j = 0; j <= i; j++) {
			prints(`${i + 1}`);
		}
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern4(n) {
	console.log("pattern4");
	for (let i = 0; i < n; i++) {
		for (let j = n; j > i; j--) {
			prints(`*`);
		}
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern5(n) {
	console.log("pattern5");
	for (let i = 0; i < n; i++) {
		for (let j = n; j > i; j--) {
			prints(`${n - j + 1}`);
		}
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern6(n) {
	console.log("pattern6");
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			prints(" ");
		}
		for (let j = 0; j < 2 * i + 1; j++) {
			prints("*");
		}
		for (let j = 0; j < n - i - 1; j++) {
			prints(" ");
		}
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern7(n) {
	console.log("pattern7");
	for (let i = 0; i < n; i++) {
		prints(" ".repeat(i));
		prints("*".repeat(2 * n - 2 * i - 1));
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern8(n) {
	console.log("pattern8");
	for (let i = 0; i < n; i++) {
		prints(" ".repeat(n - i - 1));
		prints("*".repeat(2 * i + 1));
		prints("\n");
	}
	for (let i = 0; i < n; i++) {
		prints(" ".repeat(i));
		prints("*".repeat(2 * n - 2 * i - 1));
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern9(n) {
	console.log("pattern9");
	for (let i = 0; i < n; i++) {
		prints("*".repeat(i + 1));
		prints("\n");
	}
	for (let i = 0; i < n; i++) {
		prints("*".repeat(n - i - 1));
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern10(n) {
	console.log("pattern10");
	const invertVal = (p) => {
		return (p = !p ? 1 : 0);
	};
	let init = 1;
	for (let i = 0; i < n; i++) {
		let val = init;
		for (let a = 0; a <= i; a++) {
			prints(`${val} `);
			val = invertVal(val);
		}
		prints("\n");
		init = invertVal(init);
	}
})(5);
console.log("------------------------------");

(function pattern11(n) {
	console.log("pattern11");
	for (let i = 0; i < n; i++) {
		let j = 1;
		for (; j <= i + 1; j++) {
			prints(`${j}`);
		}
		prints(" ".repeat(2 * (n - (i + 1))));
		j--;
		for (; j > 0; j--) {
			prints(`${j}`);
		}
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern12(n) {
	let val = 1;
	console.log("pattern12");
	for (let i = 0; i < n; i++) {
		for (let j = 0; j <= i; j++) {
			prints(`${val++}  `);
		}
		prints("\n");
	}
})(5);
console.log("------------------------------");

(function pattern14(n) {
	console.log("pattern14");
	for (let i = 0; i < n; i++) {
		let ch = 65; // ASCII for 'A'
		for (let j = 0; j <= i; j++) {
			prints(String.fromCharCode(ch) + " ");
			ch++;
		}
		prints("\n");
	}
})(5);
console.log("------------------------------");

// (function pattern15(n) {
// 	console.log("pattern15");
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++) {}
// 		prints("\n");
// 	}
// })(7);
// console.log("------------------------------");
