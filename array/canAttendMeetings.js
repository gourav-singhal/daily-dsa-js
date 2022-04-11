// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
// determine if a person could attend all meetings.

// Example 1:
// Input: [[0,30],[5,10],[15,20]]
// Output: false

// Example 2:
// Input: [[7,10],[2,4]]
// Output: true

/**
* 1. Brute force O(n*log(n))
*/

function canAttendMeetings(intervals) {
  if (intervals.length < 2) return true;
  
  intervals.sort((a,b) => a[0] - b[0]);
  
  let end = intervals[0][1];
  
  for (let i = 1; i < intervals.length; i++) {
    if (end > intervals[i][0]) return false;
    if (end < intervals[i][1]) end = intervals[i][1];
  }
  
  return true
}
