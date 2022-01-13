/**
* Find the Greatest common divisor of two integers
*/

/**
* 1. Brute force
* Since gcd cannot be greater than the minimum of the 
* two numbers find min and go on decrementing until the
* min number divides both a and b
*/

function gcd(a, b) {
  let res = Math.min(a, b);
  while(res > 0) {
    if ((a % res == 0) && (b % res == 0)) break;
    res--;
  }
  return res;
}

/**
* 2. Euclidean Algorithm
* if g is the GCD of a and b
* then g is also the GCD of a-b 
* where a > b
*/

function gcd(a, b) {
  if (a == 0) return b;
  if (b == 0) return a;
  
  while (a != b) {
    if (a > b)
      a = a - b;
    else 
      b = b - a;
  }
  return a;
}

      
  
