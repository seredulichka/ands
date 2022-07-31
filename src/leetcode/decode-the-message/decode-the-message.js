

/**
 * Leetcode #2325
 * Difficulty: Easy
 * https://leetcode.com/problems/decode-the-message/
 */
export const decodeMessage = (key, message) => {
    let result = '';
    const set = new Set([...key.replace(/ /g, '')]);
    const map = new Map();
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let i = 0
    for (const item of set) {
        map.set(item, alphabet[i]);
        i += 1;
    }

    
    for (let j = 0; j < message.length; j += 1) {
        result += map.get(message[j]) || ' ';
    }

    return result;
};