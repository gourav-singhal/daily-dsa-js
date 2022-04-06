// Given a target and an array find if it is possible to 
// obtain the target by summing elements of array
// elements may be repeated return the smallest combination 
// out of all that exists

// Example:- canSum(7, [2,3,4,7]) --> [7]
// canSum(7, [2,4]) --> null
// canSum(7, [2,3]) --> [2+2+3]

/**
1. Brute force (O(n^m * m))
*/

function bestSum(target, numbers) {
  if (target === 0) return [];
  if (target < 0) return null;
  
  let smallestCombination = null;
  
  for (let num of numbers) {
    const remainder = target - num;
    const remainderCombination = bestSum(remainder, numbers);
    
    if (remainderCombination !== null) {
      const newCombination = [...remainderCombination, num];
      if (smallestCombination === null || remainderCombination.length < smallestCombination.length) {
        smallestCombination = newCombination;
      }
    }
  }
  return smallestCombination;
}


/**
* 2. DP approach O(m^2 * n)
*/

function bestSum(target, numbers, memo={}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  
  let smallestCombination = null;
  for (let num of numbers) {
    const remainder = target - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    

    if (remainderCombination !== null) {
      const newCombination = [...remainderCombination, num];
      
      if (smallestCombination === null || newCombination.length < smallestCombination.length) {
        smallestCombination = newCombination;
      }
    }
  }
  memo[target] = smallestCombination;
  return memo[target];
}


/**
* 2. DP approach -- tabulation -- O(m^2 * n)
*/
  
  function bestSum(target, numbers) {
    const table = Array(target+1).fill(null);
    table[0] = [];
    
    for (let i = 0; i <= target; i++) {
      if (table[i] !== null) {
        for (let num of numbers) {
          const combination = [ ...table[i], num];
          if ((!table[i+num]) || table[i+num].length > combination.length) {
            table[i+num] = combination;
          }
        }
      }
    }
    return table[target];
  }
    
