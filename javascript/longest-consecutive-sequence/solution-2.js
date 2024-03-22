function longest_seq(arr) {
    arr.sort(function(a,b) {
        return a - b;
    });

    let longest_seq = 0;
    let current_seq = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            if (current_seq > longest_seq) {
                longest_seq = current_seq;
            }
            break;
        }

        if ((arr[i] + 1) == arr[i + 1]) {
            if (current_seq == 0) {
                current_seq += 2;
            } else {
                current_seq += 1;
            }
        } else {
            if (current_seq > longest_seq) {
                longest_seq = current_seq;
            }
            current_seq = 0;
            continue;
        }
    }

    return longest_seq;
}

console.log(longest_seq([100,4,200,1,3,2]));
console.log(longest_seq([0,3,7,2,5,8,4,6,0,1]));