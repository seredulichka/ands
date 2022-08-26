/**
* Leetcode #451
* Difficulty: Medium
* https://leetcode.com/problems/sort-characters-by-frequency/
*/
export const sortCharactersByFrequency = s => {
    const map = new Map();
    for (let i = 0; i < s.length; i += 1) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    }
   
    const sortedLetter = [...map].sort((a,b) => b[1] - a[1]);
    return sortedLetter.reduce((init, curr) => init + curr[0].repeat(curr[1]), '');
};