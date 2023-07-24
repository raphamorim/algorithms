// Time complexity: O(n)
// Space complexity: O(n)
function longest_consecutive_sequence(arr) {
	arr.sort((a, b) => {
		return (a - b);
	});

	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == (arr[i + 1] - 1)) {
			if (counter == 0) {
				counter = 2;
			} else {
				counter += 1;
			}
		}
	}

	return counter;
}


const test = require('../helpers/test');
const {start, end} = require('../helpers/timer');
const {create_ordered_array} = require('../helpers/arrays');
start();
test(longest_consecutive_sequence([100,4,200,1,3,2]), 4);
test(longest_consecutive_sequence([0,3,7,2,5,8,4,6,0,1]), 9);
test(longest_consecutive_sequence(create_ordered_array(4000)), 4000);
end();
