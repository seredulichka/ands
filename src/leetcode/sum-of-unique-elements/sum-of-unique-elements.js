/**
* Leetcode #1748
* Difficulty: Easy
* https://leetcode.com/problems/sum-of-unique-elements/
*/
export const sumOfUniqueElements = nums => {
    const unique = new Set();
    const duplicated = new Set();
    
    for (const num of nums) {
        if (unique.has(num) || duplicated.has(num)) {
            unique.delete(num)
            duplicated.add(num)
        } else {
            unique.add(num)
        }
    }

    return unique.size ? [...unique].reduce((acc, cur) => acc + cur) : 0
};