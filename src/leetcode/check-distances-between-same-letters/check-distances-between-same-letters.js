/**
* Leetcode #2399
* Difficulty: Easy
* https://leetcode.com/problems/check-distances-between-same-letters/
*/
export const checkDistancesBetweenSameLetters = (s, distance) => {
    const map = new Map();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    for (let i = 0; i < s.length; i += 1) {
        if (map.get(s[i]) >= 0) {
            if(i - map.get(s[i]) - 1 !== distance[alphabet.indexOf(s[i])]) {
                return false;
            }    
            map.delete(s[i]);
        } else {
            map.set(s[i], i);
        }
    }
    
    return true;
};