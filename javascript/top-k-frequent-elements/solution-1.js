
// Time complexity: O(n + max(f, k))
// because it goes through the entire array and then it will 
// go until f of frequency is 0 or k is equal to the size of 
// the accumulator.

// Space complexity: O(n^2)
function top_k_frequent_elements(arr_num, k) {
  let cached = new Map();
  let max_frequency = 0;
  for (let i = 0; i < arr_num.length; i++) {
    if (cached.get(arr_num[i])) {
      cached.set(arr_num[i], cached.get(arr_num[i]) + 1);
    } else {
      cached.set(arr_num[i], 1);
    }

    if (cached.get(arr_num[i]) == (max_frequency + 1)) {
      max_frequency += 1;
    }
  }

  return get_number(cached, [], k, max_frequency);
}

function get_number(cached, arr_acc, k, max_frequency) {
  if (max_frequency == 0 || arr_acc.length == k) {
    return arr_acc;
  }

  const iterator = cached[Symbol.iterator]();
  for (const item of iterator) {
    if (item[1] == max_frequency) {
      arr_acc.push(item[0]);
      cached.delete(item[0]);

      if (arr_acc.length == k) {
        break;
      }
    }
  }

  return get_number(cached, arr_acc, k, max_frequency - 1);
}

const test = require('../helpers/test');
const {start, end} = require('../helpers/timer');
const {create_ordered_array} = require('../helpers/arrays');
let long_arr = create_ordered_array(40000);
long_arr.push(3000);
start();
test(top_k_frequent_elements([1,1,1,2,2,3], 2), [1,2]);
test(top_k_frequent_elements([1,2,3,2,4,3], 2), [2,3]);
test(top_k_frequent_elements([1,2,3, 5, 4, 1, 2], 2), [1,2]);
test(top_k_frequent_elements([1,1,1,2,2,2,3,3,3,3,3,3,4,4,4,4,4], 2), [3, 4]);
test(top_k_frequent_elements([1], 1), [1]);
test(top_k_frequent_elements(long_arr, 1), [3000]);
end();

