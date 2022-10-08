/**
* Leetcode #1812
* Difficulty: Easy
* https://leetcode.com/problems/determine-color-of-a-chessboard-square/
*/
export const determineColorOfAChessboardSquare = coordinates => {
    const set = new Set(['a', 'c', 'e', 'g']);
    
    if(set.has(coordinates[0]) && +coordinates[1] % 2 === 0) {
        return true;
    } 
    
    if(!set.has(coordinates[0]) && +coordinates[1] % 2 !== 0) {
        return true;
    } 
    
    return false;
};