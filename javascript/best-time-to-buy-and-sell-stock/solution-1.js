function best_time(arr) {
    let max_profit = 0;
    let smallest = arr[0];
    let highest = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]; 
            highest = arr[i]; 
        } else {
            if (arr[i] > highest) {
                highest = arr[i];
            }
        }
    }
    
    max_profit = highest - smallest;     
    return max_profit;
}

console.log(best_time([7,1,5,3,6,4])); // 5
console.log(best_time([7,6,4,3,1])); // 0