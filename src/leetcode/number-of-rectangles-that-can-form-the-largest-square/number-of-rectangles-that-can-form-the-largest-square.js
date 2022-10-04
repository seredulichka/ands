/**
* Leetcode #1725
* Difficulty: Easy
* https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
*/
export const numberOfRectanglesThatCanFormTheLargestSquare = rectangles => {
    const map = new Map();
    let max = 0;
    
    for (const rectangle of rectangles) {
        const [l, w] = rectangle;
        const length = Math.min(l, w);
        
        if (length >= max) {
            max = length;
            map.set(length, (map.get(length) ?? 0) + 1);
        }
    }
    
    return map.get(max);
};

// export const numberOfRectanglesThatCanFormTheLargestSquare = rectangles => {
//     let max = 0;
//     let counter = 0;
    
//     for (const rectangle of rectangles) {
//         const [l, w] = rectangle;
//         const length = Math.min(l, w)
//         if (length > max) {
//             max = length;
//             counter = 1;
//         } else if (length === max) {
//             counter += 1;
//         }
//     }
    
//     return counter;
// };