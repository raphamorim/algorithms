let unsorted_arr = [5, 2, 4, 6, 1, 3];

function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current_minimum = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[current_minimum]) {
        current_minimum = j;
      }
    }

    if (arr[current_minimum] != arr[i]) {
      let current = arr[i];
      arr[i] = arr[current_minimum];
      arr[current_minimum] = current;
    }
  }

  return arr;
}

console.log(selection_sort(unsorted_arr));
