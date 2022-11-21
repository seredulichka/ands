/**
* Leetcode #1544
* Difficulty: Easy
* https://leetcode.com/problems/make-the-string-great/
*/
export const makeTheStringGreat = s => {
    const toOtherCase = s => s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase();
    const arr = s.split('');

    let i = 0; 
    while (i < arr.length - 1) {
        if (arr[i] === toOtherCase(arr[i + 1])) {
            arr.splice(i, 2);
            i -= 1;
        } else {
            i  += 1;
        }
    }

    return arr.join('');
};