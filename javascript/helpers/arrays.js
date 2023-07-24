function create_ordered_array(size) {
	return Array.apply(null, {length: size}).map(Number.call, Number)
}

module.exports = {
	create_ordered_array
};