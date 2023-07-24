function next_smallest_palindrome_number(arr) {

}

const test = require('../helpers/test');
const {start, end} = require('../helpers/timer');
start();
test(next_smallest_palindrome_number([9, 9, 9]), [1,0,0,1]);
test(next_smallest_palindrome_number([1, 2, 3, 4]), [1, 3, 3, 1]);
test(next_smallest_palindrome_number([1, 2, 2, 1]), [1, 3, 3, 1]);
end();