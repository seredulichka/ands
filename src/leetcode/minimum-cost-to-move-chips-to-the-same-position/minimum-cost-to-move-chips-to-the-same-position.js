/**
* Leetcode #1217
* Difficulty: Easy
* https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
*/
export const minimumCostToMoveChipsToTheSamePosition = position => {
    let odd = 0;
    let even = 0;

    for (const element of position) {
        element % 2 === 0 ? even += 1 : odd += 1;
    }

    return Math.min(odd, even);
};