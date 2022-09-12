/**
* Leetcode #1299
* Difficulty: Easy
* https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
*/
export const replaceElementsWithGreatestElementOnRightSide  = arr => {
    let max = arr[arr.length-1];
    arr[arr.length-1] = -1;
    
    for (let i = arr.length - 2; i >= 0; i--) {
        const curr = arr[i];
        arr[i] = max;
        if(curr > max) max = curr;
    }
    
    return arr;
};