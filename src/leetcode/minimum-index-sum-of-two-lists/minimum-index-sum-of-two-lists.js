/**
* Leetcode #559
* Difficulty: Easy
* https://leetcode.com/problems/minimum-index-sum-of-two-lists/
*/
export const minimumIndexSumOfTwoLists = (list1, list2) => {
    const map = new Map();
    let summ = null;
    let result = [];
    
    for (let i = 0; i < list1.length; i += 1) {
        map.set(list1[i], i)
    }
    
    for (let i = 0; i < list2.length; i += 1) {
        const ind = map.get(list2[i]);
       
        if (ind >= 0 && (summ === null || summ >= ind + i)) {
            if (summ > ind + i) result = [];
            summ = ind + i;
            result.push(list2[i]);
        } 
    }
    
    return result;
};