/**
 * Leetcode #804
 * Difficulty: Easy
 * https://leetcode.com/problems/unique-morse-code-words/
 */
export const uniqueMorseCodeWords = words => {
  const set = new Set();
  const morseCode = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    let morseWord = '';

    for (let j = 0; j < word.length; j += 1) {
      morseWord += morseCode[alphabet.findIndex(el => el === word[j])];
    }

    set.add(morseWord);
  }

  return set.size;
};
