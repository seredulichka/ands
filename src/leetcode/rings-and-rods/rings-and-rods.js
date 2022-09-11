/**
* Leetcode #2103
* Difficulty: Easy
* https://leetcode.com/problems/rings-and-rods/
*/
export const ringsAndRods = rings => {
    const map = new Map();
    let resultSet = new Set();
    
    for (let i = 0; i < rings.length; i += 2) {
        const color = rings[i]
        const id = rings[i+1]
        
        if(map.get(id)) {
            map.set(id, new Set([...map.get(id), color]))
            if(map.get(id).size === 3) resultSet.add(id)
        } else {
            map.set(id, new Set(color))
        }
    }
    
    return resultSet.size;
};