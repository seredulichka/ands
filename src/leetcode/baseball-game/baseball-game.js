/**
* Leetcode #682
* Difficulty: Easy
* https://leetcode.com/problems/baseball-game/
*/
export const baseballGame = operations => {
    let result = [];
    
    for (const ops of operations) {
        switch (ops) {
            case 'D': 
                result.push(2 * result[result.length - 1]);
                break;
            case 'C': 
                result.pop();
                break;
            case '+': 
                result.push(result[result.length - 1] + result[result.length - 2]);
                break;
            default: 
                result.push(+ops);
                break;
        }
    }
    
    return result.reduce((acc, curr) => acc + curr, 0);
};