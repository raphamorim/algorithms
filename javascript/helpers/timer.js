function start() {
	console.time("time");
}

function end() {
	console.timeEnd("time");
}

module.exports = { start, end };