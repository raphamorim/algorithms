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
/*
      3.
  9.      20.
        15.  7.
*/

let my_tree = new Node(3,
	new Node(9),
	new Node(20, new Node(15), new Node(7, new Node(31)))
);

console.log(my_tree);

function max_level(tree, level = 0) {    
    if (tree == undefined) {
        return level;
    }
    
    level = level + 1;
    
    let left = max_level(tree.left, level);
    let right = max_level(tree.right, level);
    
    return (left > right) ? left : right;
}

console.log(max_level(my_tree));