// 999 -> 1001
// 23545 -> 23632

function next_smallest_palindrome_number(arr) {
  let found = false;
  while (found === false) {

    // increase array
    for (let i = (arr.length - 1); i >= 0; i--) {
      if (arr[i] === 9) {
        arr[i] = 0;

        // if is the last and is still 9 then shift a new number
        if (i === 0) {
          arr.unshift(1);
          break;
        }
      } else {
        arr[i] = arr[i] + 1;
        break;
      }
    }

    // often a palindrome is the reverse
    // so 1,3 we could look for 3,1
    // if is an even number we can the

    if ((arr.length % 2) === 0) {
      let half_idx = Math.floor(arr.length / 2);
    } else {
      let half_idx = Math.floor(arr.length / 2) + 1;
    }

    found = true;

    let half_idx = Math.floor(arr.length / 2);
    let eq = [];
    for (let i = 0; i <= arr.length; i++) {
      if (i < half_idx) {
        eq.push(arr[i]);
      } else {
        if (arr[i] === eq[eq.length - 1]) {
          eq.pop();
          continue;
        } else {
          found = false;
          break;
        }
      }
    }
  }

  return arr;
}

const test = require('../helpers/test');
const {start, end} = require('../helpers/timer');
start();
test(next_smallest_palindrome_number([9, 9, 9]), [1,0,0,1]);
test(next_smallest_palindrome_number([1, 2, 3, 4]), [1, 3, 3, 1]);
test(next_smallest_palindrome_number([1, 2, 2, 1]), [1, 3, 3, 1]);
end();
