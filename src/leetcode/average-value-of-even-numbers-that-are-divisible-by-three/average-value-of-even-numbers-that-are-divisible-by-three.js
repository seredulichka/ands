/**
* Leetcode #2455
* Difficulty: Easy
* https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
*/
export const averageValueOfEvenNumbersThatAreDivisibleByThree = nums => {
    const set = new Set(nums);
    let summ = 0;
    let numbers = 0;
    
    for (const num of nums) {
        if(num % 6 === 0) {
            summ += num;
            numbers += 1;
        }
    }
    
    return Math.floor(summ/numbers) || 0;
};