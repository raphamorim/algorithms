// Idiomatic solution

function closest(num) {
    let found = null;
    let steps = 0;
    let smallest = parseInt(num, 10);
    while (smallest > 0) {
        smallest -= 1;
        steps += 1;
        let a = smallest.toString().split("");
        let b = smallest.toString().split("").reverse();
        if (a.join("") == b.join("")) {
            found = smallest;
            break;
        }
    }
    
    let larger = parseInt(num, 10);
    for (let i = 0; i < steps - 1; i++) {
        larger += 1;
        let a = larger.toString().split("");
        let b = larger.toString().split("").reverse();
        if (a.join("") == b.join("")) {
            found = larger;
            break;
        }
    } 
    
    return found;
}

console.log(closest("123")); // 121
console.log(closest("1")); // 0