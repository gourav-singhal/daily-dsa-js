// Given a target and an array find if it is possible to 
// obtain the target by summing elements of array
// elements may be repeated

// Example:- canSum(7. [2.3.4,7]) --> true
// canSum(7, [2,4]) --> false
// canSum(7, [2,3]) --> true (2+2+3)

/**
1. Brute force (O(n^m))
*/

function canSum(target, numbers) {
  if (target === 0) return true;
  if (target < 0) return false;
  
  for (let num of numbers) {
    const remainder = target - num;
    if(canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
}


/**
2. DP O(m*n)
*/

function canSum(target, numbers, memo=[]) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  
  for (let num of numbers) {
    const remainder = target - num;
    
    if (canSum(remainder, numbers, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
}
