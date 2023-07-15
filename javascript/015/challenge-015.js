/*

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false

Explanation: The root node's value is 5 but its right child's value is 4.

*/

var isValidBST = function(root) {
  if (root == null) {
    return null
  }

  return check(root, null, null)
};

var check = function(root, lower, upper) {
  // If you get to the bottom of a list successfully, without finding any irregularities
  if (root == null) {
    return true
  }

  // If there is a lower value, comparing it with the node it came from, to confirm its less than.
  if (lower != null) {
    if (root.val >= lower) {
      return false
    }
  }

  // If there is an upper value, compare it with the node it came from, to confirm its greater than
  if (upper != null) {
    if (root.val <= upper) {
      return false
    }
  }

  // If all nodes reach the bottom without any irregulaties in the binary tree conditions, return true
  return (check(root.left, root.val, upper) && check(root.right, lower, root.val))
}

