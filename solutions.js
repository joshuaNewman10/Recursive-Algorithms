///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//  _____                          _               ////////////////////
// |  __ \                        (_)              ////////////////////
// | |__) |___  ___ _   _ _ __ ___ _  ___  _ __    ////////////////////
// |  _  // _ \/ __| | | | '__/ __| |/ _ \| '_ \   ////////////////////
// | | \ \  __/ (__| |_| | |  \__ \ | (_) | | | |  ////////////////////
// |_|  \_\___|\___|\__,_|_|  |___/_|\___/|_| |_|  ////////////////////
//                                                 ////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// NOTE: modify the parameter list of each function as needed       ///
///////////////////////////////////////////////////////////////////////

// Problem #1

// Write a recursive method called countVowels that returns the number of vowels in a given String
// countVowels('abcedfg') ->2

var countVowels = function(str){
  var count = 0;
  if (str.length > 1) {
    count = countVowels(str.substring(1));
  }
  return count + /[aeiou]/.test(str[0]);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #2
// Given a non-negative int n, return the sum of its digits recursively (no loops)
// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3

var recursiveSum = function(n){
  n = '' + n;
  var sum = 0;
  var digit = +n[0];
  if (n[1]) {
    sum = recursiveSum(n.substring(1));
  }
  return sum + digit;
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #3
// Check if a given number is a power of 2
// isPowerOfTwo(8) -> true
// isPowerOfTwo(9) -> false

var isPowerOfTwo = function(n){
  var quotient = n / 2;
  if (quotient === 1) {
    return true;
  } else if (quotient % 2 === 1 || quotient < 1) {
    return false;
  } else {
    return isPowerOfTwo(quotient);
  }
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #4

// Write a recursive method that takes as parameters an initial investment amount,
// an annual interest rate, and a number of years.
// The method should return the value of the investment after the given number of years,
// assuming that the interest is compounded annually.
// (For example, if the initial investment is 1000 and the interest rate is 10 percent,
// then after one year the investment will be worth 1100, after two years 1210, after three years 1331, etc.)

var invest = function(amount, interestRate, numberOfYears){
  if (numberOfYears <= 0) {
    return amount;
  }
  var accrument = amount * (interestRate / 100);
  return invest(amount + accrument, interestRate, numberOfYears - 1);
};

//console.log(invest(1000, 10, 3)); //1331
//console.log(invest(1000, 10, 2)); //1210
//console.log(invest(1000, 10, 1)); //1100

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
var printRangeUpDown = function(min, max){
  if (min === max) {
    console.log(min);
    return;
  }

  console.log(min);
  printRangeUpDown(min + 1, max);
  console.log(min);
};

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #6

// given a binary tree where each node has a
// value, a left and a right, return the sum of all of the values.
// remember, binary tree's are different from binary search trees!
// you'll need to create a binary tree constructor!

function BinaryTree(value, left, right) {
  this.value = value || null;
  this.left = left || null;
  this.right = right || null;
}

var binaryTreeSum = function(tree){
  var sum = tree.value || 0;
  if (tree.left) sum += binaryTreeSum(tree.left);
  if (tree.right) sum += binaryTreeSum(tree.right);
  return sum;
};

var tree = new BinaryTree(100);
tree.left = new BinaryTree(100);
tree.right = new BinaryTree(100);
tree.right.left = new BinaryTree(200);
tree.right.right = new BinaryTree(200);
tree.left.left = new BinaryTree(200);
tree.left.right = new BinaryTree(200);
//console.log(binaryTreeSum(tree));


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Problem #7

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

// you'll need to create a binary search tree constructor!
var arrayToBinarySearchTree = function(array){

};


// answer to the permutations problem given in the review session.
function permutations(rounds, choices){
  var results = [];

  function innerFunc(round, plays){
    if (round === rounds){
      results.push(plays.slice());
      return;
    }else{
      for (var i = 0; i < choices.length; i++){
        plays.push(choices[i])
        innerFunc(round + 1, plays);
        plays.pop();
      }
    }
  }

  innerFunc(0, []);
  return results;
}

// rock paper scissors
function rockPaperScissors(n){
  return permutations(n, ['rock', 'paper', 'scissors']);
}

// for a group of competitors competiting in
// n different olympic swimming events, return
// all of the possible winning results.
function olympicSwimmingWinners(n, competitors){
  return permutations(n, competitors);
}

olympicSwimmingWinners(10, [
                          'Michael Phelps',
                          'Mark Spitz',
                          'Matt Biondi',
                          'Ryan Lochte',
                          ]);

