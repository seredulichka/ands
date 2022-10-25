/**
* Leetcode #860
* Difficulty: Easy
* https://leetcode.com/problems/lemonade-change/
*/
export const lemonadeChange = bills => {
    const map = new Map();
    
    for (const bill of bills) {
        if (bill !== 5) {
            if (!map.get(5)) return false;
            
            map.set(5, map.get(5) - 1);
            
            if (bill === 20) {
                if (!map.get(10) && map.get(5) < 2) return false;
                
                if (map.get(10)) {
                    map.set(10, map.get(10) - 1);
                } else {
                    map.set(5, map.get(5) - 2);
                }
            }
        }
        
        map.set(bill, (map.get(bill) ?? 0) + 1);
    }
    
    return true;
};