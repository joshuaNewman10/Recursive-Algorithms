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


1) Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

countX("xxhixx") → 4
countX("xhixhix") → 3
countX("hi") → 0

2) Given a non-negative int n, return the sum of its digits recursively (no loops)
sumDigits(126) → 9
sumDigits(49) → 13
sumDigits(12) → 3

3) Check if a given number is a power of 2
PowerOfTwo(8) -> true
PowerOfTwo(9) -> false

4) Write a recursive method called countVowels that returns the number of vowels in a given String
countVowels('abcedfg') ->2

5) Write a recursive method that takes as parameters an initial investment amount, an annual interest rate, and a number of years.
The method should return the value of the investment after the given number of years, assuming that the interest is compounded annually.
(For example, if the initial investment is 1000 and the interest rate is 10 percent, then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

