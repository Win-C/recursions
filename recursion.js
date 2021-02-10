"use strict";

// NOTE: Don't need to change the signature to solve these problems

/** product: calculate the product of an array of numbers. */

function product(nums) {
  // O(n ^ 2)
  // if (nums.length === 0) return 1;
  // return nums[0] * product(nums.slice(1));

  // O(n) with pop since order does not matter with multiplication
  if (nums.length === 0) return 1;
  let last = nums.pop();
  return last * product(nums);

  // O(n) using the index of i = 0
  // if (i === nums.length) return 1;
  // return nums[i] * product(nums, i + 1);

  // O(n) using accumulator of out = 1
  // if (i === nums.length) return out;
  // return nums[i] * product(nums, out, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  // O(n) Solved with simple for loop
  // let maxLength = 0;
  // for (let word of words){
  //   if (word.length > maxLength){
  //     maxLength = word.length;
  //   }
  // }

  // O(n) Solved with recursion, using an accumulator of out = 0
  // if (i === words.length) return out;
  // if (words[i].length > out) out = words[i].length;
  // return longest(words, out, i + 1);

  // O(n^2) solved with recursion, no accumulator
  if (words.length === 0) return 0;
  return words[0].length > longest(words.slice(1))
    ? words[0].length
    : longest(words.slice(1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // With accumulator of out = ""
  // if (i === str.length) return out;
  // if (i % 2 === 0) out = out + str[i];
  // return everyOther(str, out, i + 1);

  let out = "";

  function _everyOther(str, i) {
    if (str.length === i) return;
    if (i % 2 === 0) out = out + str[i];
    return _everyOther(str, i + 1);
  }
  _everyOther(str, 0);
  return out;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Strategy: reverse the string and then check if equal

  // With accumulator of out = ""
  // if (i === str.length) return str === out;
  // out = str[i] + out;
  // return isPalindrome(str, out, i + 1);

  let reversed = "";

  function _reverseStr(str, i) {
    if (i === str.length) return;
    reversed = str[i] + reversed;
    return _reverseStr(str, i + 1);
  }
  _reverseStr(str, 0);
  return str === reversed;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // With index O(n)
  // if (i === arr.length) return -1;
  // if (arr[i] === val) {
  //   return i;
  // } else {
  //   return findIndex(arr, val, i + 1);
  // }

  let idx = -1;

  function _findIndex(arr, val, i) {
    if (i === arr.length) return;
    if (arr[i] === val) {
      return idx = i;
    } else {
      return _findIndex(arr, val, i + 1);
    }
  }

  _findIndex(arr, val, 0);
  return idx;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // With accumulator  of out = ""
  // if (i === str.length) return out;
  // out = str[i] + out;
  // return revString(str, out, i + 1);

  let reversed = "";

  function _reverseStr(str, i) {
    if (i === str.length) return;
    reversed = str[i] + reversed;
    return _reverseStr(str, i + 1);
  }
  _reverseStr(str, 0);
  return reversed;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // hidden base case: when you are done looping
  let out = [];

  function _gatherStrings(obj){
    for (let value of Object.values(obj)){
      if (typeof value === 'object' && typeof value !== null){
        _gatherStrings(value);
      } else {
        if (typeof value === 'string'){
          out.push(value);
        }
      }
    }
  }

  _gatherStrings(obj);
  return out;

  // With accumulator, out = []
  // for (let value of Object.values(obj)) {
  //   if (typeof value === 'object' && typeof value !== null) {
  //     gatherStrings(value, out);
  //   } else {
  //     if (typeof value === 'string') {
  //       out.push(value);
  //     }
  //   }
  // }

  // return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// O(log(n))
function binarySearch(arr, val) {
  // if (arr.length === 0) return -1;

  // let mid = Math.round((arr.length - 1) / 2);

  // if (val > arr[mid]) {
  //   return binarySearch(arr.slice(mid), val);
  // } else if (val < arr[mid]) {
  //   return binarySearch(arr.slice(0, mid), val);
  // } else if (arr[mid] === val) {
  //   return mid;
  // }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
