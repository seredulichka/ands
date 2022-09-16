/**
* Leetcode #832
* Difficulty: Easy
* https://leetcode.com/problems/flipping-an-image/
*/
// export const flippingAnImage = image => {
//     const reverseAndInvert = arr => {
//         for (let i = 0, j = arr.length - 1; i < arr.length/2; i += 1, j -= 1) {
//             const first = arr[i]
//             const last = arr[j]
//             arr[i] = last === 1 ? 0 : 1
//             arr[j] = first === 1 ? 0 : 1
//         }
//         return arr;
//     }
    
//     for (let i = 0; i < image.length; i += 1) {
//         image[i] = reverseAndInvert(image[i]);
//     }
    
//     return image;
// };

export const flippingAnImage = image => {
    for (let i = 0; i < image.length; i += 1) {
        image[i] = image[i].reverse();
        image[i] = image[i].map(el => 1 - el)
    }
    
    return image;
};