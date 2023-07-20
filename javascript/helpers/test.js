function test(valueA, valueB) {
	if (valueA === valueB) {
		console.log("\u001b[32m" + "PASS", "expected:", valueB, "actual:", valueA);
	} else {
		console.log("\u001b[31m" + "ERROR", "expected:", valueB, "actual:", valueA);
	}
}

module.exports = { test };