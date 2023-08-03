// words.push(get_words(word_matrix, i + 1, keys, n, [word_matrix[i]])
function get_words(word_matrix, idx, n, acc = []) {
	if (idx == n) {
		return acc;
	}

	let arr = word_matrix[idx];

	let new_acc = [];

	console.log(acc, arr);

	// first acc is ['a']
	for (let j = 0; j < acc.length; j++) {
		// first arr is ['d', 'e', 'f']
		for (let i = 0; i < arr.length; i++) {
			new_acc.push(acc[0] + arr[i]);
		}
	}

	
	return get_words(word_matrix, idx + 1, n, acc);
}


function possible_words_from_phone_digits(n, array) {
	let keys = new Map();
	keys.set(1, []);
	keys.set(2, ['a', 'b', 'c']);
	keys.set(3, ['d', 'e', 'f']);
	keys.set(4, ['g', 'h', 'i']);
	keys.set(5, ['j', 'k', 'l']);
	keys.set(6, ['m', 'n', 'o']);
	keys.set(7, ['p', 'q', 'r', 's']);
	keys.set(8, ['t', 'u', 'v']);
	keys.set(9, ['w', 'x', 'y', 'z']);

	// Create matrix
	let word_matrix = [];
	for (let j = 0; j < array.length; j++) {
		word_matrix.push(keys.get(array[j]));
	}

	let words = [];
	for (let i = 0; i < word_matrix.length; i++) {
		// e.g: a
		let next = i + 1;		
		words.push(get_words(word_matrix, next, n, [word_matrix[i][0]]));
	}

	return words;
}


const test = require('../helpers/test');
test(possible_words_from_phone_digits(3, [2, 3, 4]), [
	'adg','adh','adi','aeg','aeh','aei','afg','afh','afi',
	'bdg','bdh','bdi','beg','beh','bei','bfg','bfh','bfi',
	'cdg','cdh','cdi','ceg','ceh','cei','cfg','cfh','cfi'
]);
// test(possible_words_from_phone_digits(3, [3, 4, 5]), [
// 	'dgj', 'dgk', 'dgl', 'dhj', 'dhk', 'dhl', 'dij', 'dik', 'dil',
// 	'egj', 'egk', 'egl', 'ehj', 'ehk', 'ehl', 'eij', 'eik', 'eil',
// 	'fgj', 'fgk', 'fgl', 'fhj', 'fhk', 'fhl', 'fij', 'fik', 'fil'
// ]);
// test(possible_words_from_phone_digits(1, [3,2,4], 9);
