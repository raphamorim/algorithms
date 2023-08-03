function distance_value_between_two_arrays(arr1, arr2, d) {
  let distance_value = arr1.length;

  // O(arr1length ^ arr2length)
  for (let i = 0; i < arr1.length; i++) {
    // We also know d, which is the most we would dive into it
    // If the array was ordered we could know straight
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] >= arr2[j]) {
        if ((arr1[i] - arr2[j]) <= d && d >= 0) {
          distance_value -= 1;
         break;
        }
      } else {
        if ((arr2[j] - arr1[i]) <= d && d >= 0) {
         distance_value -= 1;
         break;
        }
      }
    }
  }

  return distance_value;
}

const test = require('../helpers/test');
test(distance_value_between_two_arrays([4,5,8], [10,9,1,8], 2), 2);
test(distance_value_between_two_arrays([1,4,2,3], [-4,-3,6,10,20,30], 3), 2);
test(distance_value_between_two_arrays([2,1,100,3], [-5,-2,10,-3,7], 6), 1);
