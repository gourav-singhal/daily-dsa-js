// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]

/**
* 1. Sliding window approach
*/

function twoSum(arr, target) {
  const length = arr.length;
  let l = 0 , r = length;
  
  while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum > target) r-= 1;
    else if (sum < target) l+= 1;
    else return [l+1, r+1];
  }
  return [];
}
