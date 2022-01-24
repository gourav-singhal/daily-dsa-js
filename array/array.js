/**
* Replace every element in an array with the greatest element on right side
* Eg:- [16, 17, 4, 3, 5, 2] --> [17, 5, 5, 5, 2, -1]
*/


/**
* Naive solution (approaching left to right)
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
