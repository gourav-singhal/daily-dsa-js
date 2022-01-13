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

/**
* 2. Using formula
* a * b = gcd(a,b) * lcm(a, b)
*/

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

