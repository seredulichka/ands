import { findFirstPalindromicStringInTheArray } from './find-first-palindromic-string-in-the-array';
describe('[Leetcode] find-first-palindromic-string-in-the-array', () => {
	test('example #1', () => {
	expect(
		findFirstPalindromicStringInTheArray(["abc","car","ada","racecar","cool"])
	).toBe("ada");
	});

	test('example #2', () => {
	expect(
		findFirstPalindromicStringInTheArray(["notapalindrome","racecar"])
	).toBe("racecar");
	});
});