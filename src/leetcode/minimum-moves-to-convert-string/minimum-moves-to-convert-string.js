/**
 * Leetcode #2027
 * Difficulty: Easy
 * https://leetcode.com/problems/minimum-moves-to-convert-string/
 */
// export const minimumMovesToConvertString = s => {
//   let counter = 0;
//   let i = 0;
//   for (let i = 0; i < s.length; ) {
//     if (s[i] === 'O') {
//       i += 1;
//     } else if (s[i] === 'X' || s[i + 1] === 'X' || s[i + 2] === 'X') {
//       counter += 1;
//       i += 3;
//     }
//   }

//   return counter;
// };

//faster and less solution

export const minimumMovesToConvertString = s => {
  let counter = 0;
  let i = 0;
  for (let i = 0; i < s.length; ) {
    const condition = s[i] === 'O';
    counter += condition ? 0 : 1;
    i += condition ? 1 : 3;
  }

  return counter;
};
