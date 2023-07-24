let arr = [2,8,5,3,9,4,1];

function recursive_bubble_sort(recv_arr, sort) {
  for (let i = 0; i < recv_arr.length; i++) {
    if (!sort) {
      recv_arr = recursive_bubble_sort(recv_arr, true);
      continue;
    }


    if (recv_arr[i] > recv_arr[i + 1]) {
      let old = recv_arr[i];
      recv_arr[i] = recv_arr[i + 1];
      recv_arr[i + 1] = old;
    }
  }

  return recv_arr;
}

function bubble_sort(recv_arr) {
  for (let i = 0; i < recv_arr.length; i++) {
    for (let j = 0; j < recv_arr.length; j++) {
      if (recv_arr[j] > recv_arr[j + 1]) {
        let prev = recv_arr[j];
        let next = recv_arr[j + 1];
        recv_arr[j + 1] = prev;
        recv_arr[j] = next;
      }
    }
  }

  return recv_arr;
}


console.log(recursive_bubble_sort(arr));
console.log(bubble_sort(arr));
