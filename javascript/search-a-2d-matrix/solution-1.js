function search(matrix, target) {
    let found = false;
    let left = 0;
    let ptr = Math.floor(matrix.length / 2);
    let right = matrix[ptr].length - 1;
    let last_ptr = ptr;
    
    while (left <= right) {
        let mid = Math.floor(left + right / 2);
        let current = matrix[ptr][mid];
            
        if (current == target) {
            return true;
        }
        
        if (mid == matrix[ptr].length - 1) {
            ptr += 1;
            if (matrix[ptr] != undefined && ptr != last_ptr) {
                left = 0;
                right = matrix[ptr].length - 1;
                continue;
            } else {
                break;
            }
        }
        
        if (mid == 0) {
            ptr -= 1;
            if (matrix[ptr] != undefined && ptr != last_ptr) {                
                left = 0;
                right = matrix[ptr].length - 1;
                continue;
            } else {
                break;
            }
        }
            
        if (target > current) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return found;
}


console.log(search([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
console.log(search([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
console.log(search([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 60));