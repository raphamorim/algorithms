function merge(arr) {
    let merged = [];
    
    for (var i = 0; i < arr.length; i++) {
        if (merged.length == 0) {
            merged.push(arr[i]);
            continue;
        }
        
        let last_item = merged[merged.length - 1];
        if (last_item[1] >= arr[i][0]) {
            // Then exists overlap
            merged.pop();
            merged.push([last_item[0], arr[i][1]]);
        } else {
            merged.push(arr[i]);
        }
    }
    
    return merged;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]