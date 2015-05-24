// Problem #1

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max){

};


// Problem #2

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!

var binaryTreeSum = function(tree){

};

// Here's a sample constructor
var BinaryTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

// expects a Binary tree node to be passed.
// Cant add a left if it already has a left.
BinaryTree.prototype.addLeft = function(node){
  if (this.left !== null || !(node instanceof BinaryTree)) return false;
  else this.left = node;
}

// expects a Binary tree node to be passed.
// Cant add a left if it already has a right.
BinaryTree.prototype.addRight = function(node){
  if (this.right !== null || !(node instanceof BinaryTree)) return false;
  else this.right = node;
}


// Problem #3

// Given an array of integers which is sorted in increasing order
// build a binary search tree of minimal height. Height of a tree
// is the max number of edges from a node to the tree's root node.
// e.g. this tree has height 3.
//                   10
//                  /  \
//                3     30
//               / \
//              1   7
//                   \
//                    8


var arrayToBinarySearchTree = function(array){

};






















