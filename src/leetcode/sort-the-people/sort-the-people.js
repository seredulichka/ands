/**
* Leetcode #2418
* Difficulty: Easy
* https://leetcode.com/problems/sort-the-people/
*/
export const sortThePeople = (names, heights) => {
    const map = new Map();
    
    for (let i = 0; i < heights.length; i += 1) {
        map.set(heights[i], names[i]);
    }
                
    return [...map].sort((a, b) => b[0] - a[0]).map(el => el[1]);
};