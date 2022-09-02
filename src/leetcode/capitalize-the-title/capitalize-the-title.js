/**
* Leetcode #2129
* Difficulty: Easy
* https://leetcode.com/problems/capitalize-the-title/
*/
// export const capitalizeTheTitle = title => {
//     const words = title.toLowerCase().split(' ')
    
//     for (let i = 0; i < words.length; i += 1) {
//         if (words[i].length > 2) {
//             words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//         }
//     }

//     return words.join(' ');
// }; 

export const capitalizeTheTitle = title => {
    const words = title.toLowerCase().split(' ')
    let result = ''
    
    for (const word of words) {
        if (word.length <= 2) {
            result += ` ${word}`
        } else {
            result += ` ${word[0].toUpperCase()}${word.slice(1)}`
        }
    }

    return result.trim();
}; 