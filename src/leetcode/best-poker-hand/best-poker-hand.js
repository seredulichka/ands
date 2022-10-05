/**
* Leetcode #2347
* Difficulty: Easy
* https://leetcode.com/problems/best-poker-hand/
*/
export const bestPokerHand = (ranks, suits) => {
    let counter = 0;
    const map = new Map();
    
    const findPokerHand = arr => {
        for (const card of arr) {
            const count = (map.get(card) ?? 0) + 1
            counter = Math.max(count, counter)
            map.set(card, count)
        }
    }
    
    findPokerHand(suits);
    if (counter === 5) return "Flush";
    
    counter = 0;
    map.clear();
    findPokerHand(ranks);
    if (counter === 1) return "High Card";
    if (counter === 2) return "Pair";
    
    return "Three of a Kind";  
};