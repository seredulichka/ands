/**
* Leetcode #2287
* Difficulty: Easy
* https://leetcode.com/problems/rearrange-characters-to-make-target-string/
*/
export const rearrangeCharactersToMakeTargetString = (s, target) => {
    const targetMap = new Map();
    const sMap = new Map();
    let result = +Infinity;

    for (const letter of s) {
        sMap.set(letter, (sMap.get(letter) ?? 0) + 1);
    }

    for (const letter of target) {
        targetMap.set(letter, (targetMap.get(letter) ?? 0) + 1);
    }

    for (const letter of targetMap.keys()) {
        const repeat = (sMap.get(letter) ?? 0) / targetMap.get(letter);
        result = Math.min(result, Math.floor(repeat));
    }

    return result;
};