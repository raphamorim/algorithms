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
[4,2,7,1,3,6,9]

      4.
  2.      7.
1.  3.  6.  9.
*/

let tree = new Node(4,
	new Node(2, new Node(1), new Node(3)),
	new Node(7, new Node(6), new Node(9))
);

console.log(tree);

function invert(reftree) {
    if (reftree.right == undefined && reftree.left == undefined) {
        return reftree;
    }
    
    let old_left = reftree.left;
    reftree.left = invert(reftree.right);
    reftree.right = invert(old_left);
    return reftree;
}

console.log(invert(tree));