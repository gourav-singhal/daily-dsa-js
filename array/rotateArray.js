// Write a function rotate(ar[], d) that rotates arr[] of size n by d elements. 
// Example - arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2
// Output - arr[] = [3, 4, 5, 6, 7, 1, 2]

/**
*1. Brute force approach
*/

function rotateArray(arr, d) {
  const n = arr.length;
  return [...arr.slice(d, n), ...arr.slice(0, d)];
}
