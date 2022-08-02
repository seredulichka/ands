/**
* Leetcode #2194
* Difficulty: Easy
* https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
*/
export const cellsInARangeOnAnExcelSheet = (s) => {
	const result = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let startId = null;
    let finalId = null;
   
    for(let i = 0; i < alphabet.length; i += 1) {
        const letter = alphabet[i]
        if(letter === s[0]){
           startId = i;
        } 
        if(startId !== null && finalId === null) {
            for(let j = +s[1]; j <= +s[4]; j += 1) {
                result.push(letter + j)
            }
        }
        
        if(letter === s[3]){
            finalId = i
        }
    }
    
    return result;
};