// Let 1 represent ‘A’, 2 represents ‘B’, etc. 
// Given a digit sequence, count the number of possible decodings of the given digit sequence. 

// Input:  digits[] = "121"
// Output: 3
// The possible decodings are "ABA", "AU", "LA"

/**
1. Recursive approach (2^n)
*/

function countNumOfWays(digits) {
  return countDecoding(digits, digits.length);
}

function countDecoding(digits, n) {
  if (n == 0) return 1;
  
  const s = digits.length - n;
  
  if (digits[s] == '0') return 0;
  
  let count = 0;
  
  if (digits[n-1] > 0) {
    count += countDecoding(digits, n -1);
  }
  
  if ((digits[n-2] == '1' || digits[n-2] == '2') && digits[n-1] < 7) {
    count += countDecoding(digits, n - 2);
  }
  
  return count;
}


/**
2. Dynamic programming O(n)
*/


function countDecodingDP(digits, n) {
  const count = new Array(n+1);
  
  count[0] = 1;
  count[1] = 1;
  
  for (let i = 0; i <= n; i++) {
    count[i] = 0;
    
    if (digits[i-1] > 0)
      count[i] = count[i-1];
    
    if((digits[i-2] == 1 || digits[i-2] == 2) && digits[i-1] < 7)
      count += count[i-2];
  }
  return count[n];
}




