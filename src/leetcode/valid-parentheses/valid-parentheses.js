/**
* Leetcode #20
* Difficulty: Easy
* https://leetcode.com/problems/valid-parentheses/
*/
export const validParentheses = (s) => {
	let arr = s.split("");
    let i = 0;      
    while(i < arr.length) {
        if((arr[i] === '(' && arr[i + 1] === ')') || 
           ( arr[i] === '{' && arr[i + 1] === '}') || 
           ( arr[i] === '[' && arr[i + 1] === ']')) {
                arr.splice(i, 2);
                i -= 1
        } else {
            i += 1
        }
    }
    return arr.length === 0;
};