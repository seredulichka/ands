/**
* Leetcode #594
* Difficulty: Easy
* https://leetcode.com/problems/longest-harmonious-subsequence/
*/
export const longestHarmoniousSubsequence = nums => {
    const map = new Map();
    let max = 0;

    for (const num of nums) {
        const count = (map.get(num) ?? 0) + 1;
        map.set(num, count);
    }

    for (const num of map.keys()) {
        if (map.get(num + 1)) {
            max = Math.max(map.get(num) + map.get(num + 1), max);
        };
    }

    return max;
};