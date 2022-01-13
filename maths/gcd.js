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

      
  
