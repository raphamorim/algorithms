class Node {
    constructor(val, left, right) {
        this.val = val;
        if (left != undefined) {
            this.left = left;
        }
        if (right != undefined) {
            this.right = right;
        }
    }
}

let tree_to_traverse = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));
console.log(tree_to_traverse);

function levels(tree, arr = [], current = 0) {
    if (tree == undefined) {
        return arr;
    }
    
    if (arr[current] != undefined) {
        arr[current].push(tree.val);
    } else {
        arr[current] = [tree.val];
    }
    
    if (tree.left != undefined) {
        levels(tree.left, arr, current + 1);
    }
    if (tree.right != undefined) {
        levels(tree.right, arr, current + 1);
    }
    
    return arr;
}

console.log(levels(tree_to_traverse));