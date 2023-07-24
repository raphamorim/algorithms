function two_sum(num, target) {
	if (num.length <= 1) {
		return [];
	}

	var two_sum = [];
	var two_sum_map = new Map();
	for (let i = 0; i < num.length; i+=1) {
		if (!two_sum_map.has(num[i])) {
			two_sum_map.set(num[i], i);
		}
	}

	for (let i = 0; i < num.length; i+=1) {
		if (num[i] > target) {
			continue;
		}

		let pair = target - num[i];
		if (two_sum_map.has(pair)) {
			two_sum = [two_sum_map.get(pair), i];
		}
	}

	return two_sum;
}

const test = require('../helpers/test');
const {start, end} = require('../helpers/timer');
start();
test(two_sum([1], 0), []);
test(two_sum([1,2], 2), []);
test(two_sum([], -1), []);
test(two_sum([2,7,11,15], 9), [0,1]);
test(two_sum([2,11,7,15], 9), [0,2]);
test(two_sum([11,2,7,15], 9), [1,2]);
test(two_sum([3,2,4], 6), [1,2]);
test(two_sum([0,0], 0), [0,1]);
test(two_sum([20,3,3,3,3,3,3,3,20], 40), [0,8]);
end();