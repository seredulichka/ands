/**
* Leetcode #2506
* Difficulty: Easy
* https://leetcode.com/problems/count-pairs-of-similar-strings/
*/
export const countPairsOfSimilarStrings = words => {
    let result = 0;
    const sets = words.map(el => new Set(el.split('')));
    
    for (let i = 0; i < sets.length; i += 1) {
        for (let j = i + 1; j < sets.length; j += 1) {
            if (sets[i].size !== sets[j].size) continue;
            if([...sets[i]].every((x) => sets[j].has(x))) result += 1;
        }
    }

    return result;
};