function longest(my_str) {
    let arr = my_str.split('');
    
    let longest = 0;
    let lasts = {};
    
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] in lasts)) {
            lasts[arr[i]] = true;
        } else {
            let size = Object.keys(lasts).length;
            if (size > longest) {
                longest = size;
            }
            
            lasts = {};
            lasts[arr[i]] = true;
        }
    }
    
    return longest;
}

console.log(longest("abcabcb"));
console.log(longest("bbbb"));
console.log(longest("pwwkew"));