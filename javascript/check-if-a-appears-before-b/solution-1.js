function check_if_a_is_before_b(str) {
  let arr = str.split("");

  let a_is_before = true;
  let found_a = false;
  let found_b = false;
  // Note other possibility is do backwards search
  // b->b->a(found a)->b(break then)
  //
  // Also instead of found_a or found_b is possible to have a small increment
  // when b is found
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {

      if (found_b) {
        a_is_before = false;
        break;
      }

      found_a = true;
    } else {
      found_b = true;
    }
  }

  return a_is_before;
}

const test = require('../helpers/test');
test(check_if_a_is_before_b("aaabbb"), true);
test(check_if_a_is_before_b("abab"), false);
test(check_if_a_is_before_b("bbb"), true);
