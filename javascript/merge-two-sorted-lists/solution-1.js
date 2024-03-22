function sort(arr_one, arr_two, acc) {
    if (arr_one.length == 0 && arr_two.length == 0) {
        return acc;
    }
    
    if (arr_one.length == 0) {
        acc.push(arr_two[0]);
        arr_two.shift();
        return sort([], arr_two, acc);
    } else if (arr_two.length == 0) {
        acc.push(arr_one[0]);
        arr_one.shift();
        return sort(arr_one, [], acc);
    }
    
    if (arr_one[0] < arr_two[0]) {
        acc.push(arr_one[0]);
        arr_one.shift();
    } else {
        acc.push(arr_two[0]);
        arr_two.shift();
    }
    
    return sort(arr_one, arr_two, acc);
}

function merge_two_sorted_lists(arr_one, arr_two) {
    return sort(arr_one, arr_two, []);
}

console.log(merge_two_sorted_lists([1,2,4], [1,3,4]));
console.log(merge_two_sorted_lists([1,2,2,2,3,4,], [1,2,3,3,4,4,5,6]));
console.log(merge_two_sorted_lists([], []));
console.log(merge_two_sorted_lists([], [0]));