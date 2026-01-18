function repeater(times) {
	if (times === 0) return;
	console.log("bro! ");
	repeater(times - 1);
}

repeater(4);
