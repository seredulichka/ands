/**
* Leetcode #1436
* Difficulty: Easy
* https://leetcode.com/problems/destination-city/
*/
export const destinationCity = paths => {
    const setA = new Set();
    const setB = new Set();
        
    for (const [cityA, cityB] of paths) {
        if (setB.has(cityA)) {
            setB.delete(cityA)
        } else {
            setA.add(cityA)
        }
        
        if (setA.has(cityB)) {
            setA.delete(cityB)
        } else {
            setB.add(cityB, 1)
        }
    }
    
    const [first] = setB;
    return first;
};