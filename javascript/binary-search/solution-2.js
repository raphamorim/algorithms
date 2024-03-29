function binary_search(arr, target) {
    let found = -1;
    let right = arr.length - 1;
    let left = 0;
        
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (target == arr[mid]) {
            found = mid;
            break;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else if (target < arr[mid]) {
            right = mid - 1;
        }
    }
    
    return found;
}

console.log(binary_search([-1,0,3,5,9,12], 9));
console.log(binary_search([-1,0,3,5,9,12], 2));
console.log(binary_search([-1,0,3,5,9,12], 14));