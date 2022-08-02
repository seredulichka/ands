/**
* Leetcode #1720
* Difficulty: Easy
* https://leetcode.com/problems/decode-xored-array/
*/
export const decodeXoredArray = (encoded, first) => {
	let result = [first];
    for (let i = 0; i < encoded.length; i += 1) {
        result.push(result[i] ^ encoded[i]);
    }
    return result;
};