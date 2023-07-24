
// Time complexity: O(n)
// Space complexity: O(n)
function contains_duplicate(arr_num) {
  let contains = false;
  let num_set = new Set();
  for (let i = 0; i < arr_num.length; i++) {
    if (num_set.has(arr_num[i])) {
      contains = true;
      break;
    }

    num_set.add(arr_num[i]);
  }

  return contains;
}


const test = require('../helpers/test');
const {start, end} = require('../helpers/timer');
const {create_ordered_array} = require('../helpers/arrays');
start();
test(contains_duplicate([1,2,3,1]), true);
test(contains_duplicate([1,2,3,4]), false);
test(contains_duplicate([1,1,1,3,3,4,3,2,4,2]), true);
test(contains_duplicate(create_ordered_array(10000)), false);
end();
