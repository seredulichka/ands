import { validPalindrome } from './valid-palindrome';
describe('[Leetcode] valid-palindrome', () => {
	test('example #1', () => {
	expect(
		validPalindrome("A man, a plan, a canal: Panama")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		validPalindrome("race a car")
	).toBe(false);
	});

	test('example #2', () => {
	expect(
		validPalindrome(" ")
	).toBe(true);
	});
});