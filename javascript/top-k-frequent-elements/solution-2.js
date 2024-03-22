function top_k_frequent_elements(nums, k) {    
    let dict = {};
    for (var i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1;
        } else {
            dict[nums[i]] += 1;
        }
    }
    
    let sortable = [];
    for (var entry in dict) {
        sortable.push([entry, dict[entry]]);
    }
    
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    let output = [];
    for (var i = sortable.length - 1; output.length < k; i--) {
        output.push(sortable[i][0]);
    }
    
    return output;
}

console.log(top_k_frequent_elements([1,1,1,2,2,3], 2));
console.log(top_k_frequent_elements([3,3,3,3,1,1,1,2,2,3], 2));
console.log(top_k_frequent_elements([1], 1));