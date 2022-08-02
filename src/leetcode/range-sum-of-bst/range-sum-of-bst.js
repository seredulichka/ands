/**
* Leetcode #938
* Difficulty: Easy
* https://leetcode.com/problems/range-sum-of-bst/
*/
export const rangeSumOfBst = (root, low, high) => {
    let result = 0;
    const summ = (root) =>{
        if (root) {
            if(low <= root.val && root.val <= high) {
                result += root.val
            }
            summ(root.left)
            summ(root.right)
        }
    }
    summ(root)
    return result
};