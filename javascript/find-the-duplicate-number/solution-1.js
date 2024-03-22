// Not respecting space constraint
function find_duplicate_number(arr) {
    let duplicated = null;
    let cache = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in cache) {
            duplicated = arr[i];
            break;
        } else {
            cache[arr[i]] = 1;
        }
    }
    
    return duplicated;
}

console.log(find_duplicate_number([1,3,4,2,2]));
console.log(find_duplicate_number([3,1,3,4,2]));
console.log(find_duplicate_number([3,3,3,3,3]));