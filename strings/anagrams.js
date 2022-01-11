/**
* Two strings are said to be anagrams of each other
* if alphabets of one of the strings can be reorganized 
* to form the other string
* Eg:- danger | garden
*/

/**
* 1. Brute force (Hash maps)
*/

function anagram(s1, s2) {
    let charMapS1 = {};
    let charMapS2 = {};
    
    for (let i = 0; i < s1.length; i++) {
        if (charMapS1[s1[i]]) {
            charMapS1[s1[i]]++;
        } else {
            charMapS1[s1[i]] = 1;
        }
    }
    
     for (let i = 0; i < s2.length; i++) {
        if (charMapS2[s2[i]]) {
            charMapS2[s2[i]]++;
        } else {
            charMapS2[s2[i]] = 1;
        }
    }
    
    for (key in charMapS1) {
        if (charMapS1[key] != charMapS2[key]) return false;
    }
    
    return true;
}
