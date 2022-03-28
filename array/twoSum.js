// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

/**
* 1. Solution using hash map O(n)
*/

function twoSum(arr, target) {
    const hmap = {};
    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if (typeof hmap[diff] == 'number') return [hmap[diff], i];
        hmap[arr[i]] = i;
    }
}
