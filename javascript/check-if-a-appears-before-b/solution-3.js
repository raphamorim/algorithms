function a_before_bs(my_string) {
    let arr = my_string.split("");
    
    let is_b_found = false;
    let is_a_found = false;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == "b") {
            if (is_a_found) {
                return false;
            }
            is_b_found = true;
        } else {
            is_a_found = true;
        }
    }
    
    return true;
}

console.log(a_before_bs("aaabbb"));
console.log(a_before_bs("abab"));
console.log(a_before_bs("bbb"));
