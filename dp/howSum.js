// Given a target and an array find if it is possible to 
// obtain the target by summing elements of array
// elements may be repeated return the pair

// Example:- howSum(7. [2.3.4,7]) --> [3, 4]
// howSum(7, [2,4]) --> null
// howSum(7, [2,3]) --> [2+2+3]

/**
* 1. Brute force (O(n^m * m))
*/

function howSum(target, numbers) {
  if (target === 0) return [];
  if (target < 0) return null;
  
  for (let num of numbers) {
    const remainder = target - num;
    const res = howSum(remainder, numbers);
    if (res != null) {
      return [...res, num];
    }
  }
  return null;
}


/**
* 2. DP O(n*m^2)
*/

function howSum(target, numbers, memo={}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  
  for (let num of numbers) {
    const remainder = target - num;
    const res = howSum(remainder, numbers, memo);
    
    if (res !== null) {
      memo[target] = [...res, num]
      return memo[target];
    }
  }
  memo[target] = null
  return memo[target];
}


/**
* 2. DP tabulation O(n*m^2)
*/
function howSum(target, numbers) {
  const table = Array(target+1).fill(null);
  table[0] = [];
  
  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        table[i+num] = [...table[i], num];
      }
    }
  }
  return table[target];
}

