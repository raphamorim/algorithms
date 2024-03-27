function process(my_string) {
    let arr = my_string.split("");
    let stack = [];
    
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == "*") {
            let val_1 = stack.pop();
            let val_2 = stack.pop();
            stack.push(val_1 * val_2);
            continue;
        } else if (arr[i] == "-") {
            let val_1 = stack.pop();
            let val_2 = stack.pop();
            stack.push(val_1 - val_2);
            continue;
        } else if (arr[i] == "+") {
            let val_1 = stack.pop();
            let val_2 = stack.pop();
            stack.push(val_1 + val_2);
            continue;
        } else if (arr[i] == "/") {
            let val_1 = stack.pop();
            let val_2 = stack.pop();
            stack.push(val_1 / val_2);
            continue;    
        }
        
        stack.push(parseInt(arr[i], 10));
    }
        
    if (stack.length > 0) {
        return stack[stack.length - 1];
    } else {
        return 0;
    }
}

console.log(process("+9*26")); // 21
console.log(process("-+8/632")); // 8
console.log(process("-+7*45+20")); // 25