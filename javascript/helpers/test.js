function test(valueA, valueB) {
	if (Array.isArray(valueA)) {
		valueA = JSON.stringify(valueA);
	}
	if (Array.isArray(valueB)) {
		valueB = JSON.stringify(valueB);
	}

	if (valueA === valueB) {
		console.log("\u001b[32m" + "PASS", "expected:", valueB, "actual:", valueA);
	} else {
		console.log("\u001b[31m" + "ERROR", "expected:", valueB, "actual:", valueA);
	}
}

module.exports = test;