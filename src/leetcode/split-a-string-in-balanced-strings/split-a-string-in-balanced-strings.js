/**
* Leetcode #1221
* Difficulty: Easy
* https://leetcode.com/problems/split-a-string-in-balanced-strings/
*/
export const splitAStringInBalancedStrings = s => {
    let lcount = 0;
    let rcount = 0;
    let count = 0;
    

    s.split('').forEach(val => {
        if(val==='R') rcount++;
        else if(val==='L') lcount++;
        if(lcount===rcount){
            count++;
            lcount = 0;
            rcount = 0;
        }
    });
    return count;

};