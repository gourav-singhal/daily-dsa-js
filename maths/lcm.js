/** Find LCM of two integers */

/**
* 1. Brute force method (Iterative)
*/

function lcm(a, b) {
  let res = Math.max(a, b);
  
  while(true) {
    if((res % a == 0) && (res % b == 0)) return res;
    res++;
  }
}
