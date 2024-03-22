function find_duplicate_number(arr) {
    // Both represents indexes
    let left = 0;
    let right = 0;

    do {
        left = arr[left];
        right = arr[arr[right]];
    } while(left != right);

    right = 0;

    do {
        left = arr[left];
        right = arr[right];
    } while(left != right);
    
    return left;
}

console.log(find_duplicate_number([1,3,4,2,2]));
console.log(find_duplicate_number([3,1,3,4,2]));
console.log(find_duplicate_number([3,3,3,3,3]));