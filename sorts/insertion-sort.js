let arr = [2,3,5,8,9,10,1,4,6,7];

function insertion_sort(recv_arr) {
  for (let i = 0; i < recv_arr.length; i++) {
    if (recv_arr[i] <= recv_arr[i + 1]) {
      continue;
    }


    for (let j = i; j >= 0; j--) {
      if (recv_arr[j + 1] < recv_arr[j]) {
        let bigger = recv_arr[j];
        let smaller = recv_arr[j + 1];
        recv_arr[j + 1] = bigger;
        recv_arr[j] = smaller;
      }
    }
  }

  return recv_arr;
}

console.log(insertion_sort(arr));
