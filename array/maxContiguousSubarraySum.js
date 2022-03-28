// Write an efficient program to find the sum of contiguous subarray 
// within a one-dimensional array of numbers that has the largest sum. 

// Input-> a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
// Output -> 7 

/**
* 1. Kadane’s Algorithm:
*/

function maxSubArray(arr) {
    const length = arr.length;
    let maxSub = arr[0];
    let currentSum = 0;
    for(let i = 0; i < length; i++) {
        if (currentSum < 0) currentSum = 0;
        currentSum += arr[i];
        maxSub = Math.max(maxSub, currentSum)
    }
    return maxSub;
}
