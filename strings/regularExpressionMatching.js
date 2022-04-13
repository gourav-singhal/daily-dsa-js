// Given an input string (s) and a pattern (p), implement regular expression matching with support for ‘.’ and ‘*’.

// ’.’ Matches any single character. ‘*’ Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like . or *.

/**
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
*/


function isMatch(s, p) {
  let sLen = s.length;
  let pLen = p.length;
  
  if (pLen === 0) return (sLen === 0);
  
  let firstMatch = ((sLen !== 0) && (s[0] === p[0]) || (p[0] === '.'));
  
  if (pLen >= 2 && p[1] === '*') {
    return (isMatch(s, p.substr(2)) || (firstMatch && isMatch(s.substr(1), p)));
  } else {
    return (firstMatch && isMatch(s.substr(1), p.substr(1)));
  }
}
