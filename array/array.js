/**
* Replace every element in an array with the greatest element on right side
* Eg:- [16, 17, 4, 3, 5, 2] --> [17, 5, 5, 5, 2, -1]
*/


/**
* 1. Naive solution (approaching left to right)
*/

function replace(arr) {
  let i = 0;
  const arrLen = arr.length
  while (i < arrLen) {
    const max = Math.max(...arr.slice(i+1, arrLen));
    arr[i] = max;
    i++;
  }
  arr[i-1] = -1;
  return arr;
}

/**
* 2. Faster solution approaching array in reverse order
*/

function replace(arr) {
    const length = arr.length - 1;
    let rightMax = -1;
    for (let i = length; i >= 0; i--) {
        newMax = Math.max(arr[i], rightMax);
        arr[i] = rightMax;
        rightMax = newMax;
    }
    return arr;
}
