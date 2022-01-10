/* Check if a number is Palindrome */

/** 
* 1. Brute force
*/

function checkPalindrome(n) {
  let rev = 0;
  const temp = n;
  
  while(temp != 0) {
    const lastDigit = temp % 10;
    rev = rev * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }
  
  return (n == rev);
}
    
