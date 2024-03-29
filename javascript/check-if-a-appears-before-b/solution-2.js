function a(my_string) {
    let arr = my_string.split("");
    let counter = 0;
    let flag = false;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "a") {
            if (flag) {
                return false;
            }
            counter += 1;
        } else {
            flag = true;
            counter -= 1;
        }
    }

    return (counter <= 0);
}

console.log(a("aaabbb"));
console.log(a("abab"));
console.log(a("bbb"));
