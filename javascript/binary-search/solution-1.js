function binary_search(arr, target) {
    let found_index = null;
    let current_index = Math.floor(arr.length / 2);
    
    while (found_index == null) {
        if (arr[current_index] == target) {
            found_index = current_index;
            break;
        }
                
        if (current_index == 0 || current_index == arr.length - 1) {
            found_index = -1;
            break;
        }

        if (arr[current_index] > target) {
            if (current_index == arr.length - 2) {
                current_index = arr.length - 1;
                continue;
            }
            
            current_index = Math.floor(current_index / 2);
        } else {
            if (current_index == 1) {
                current_index = 0;
                continue;
            }
            
            current_index += Math.floor(current_index / 2);
        }
    }
    
    return found_index;
}

console.log(binary_search([-1,0,3,5,9,12], 9));
console.log(binary_search([-1,0,3,5,9,12], 2));