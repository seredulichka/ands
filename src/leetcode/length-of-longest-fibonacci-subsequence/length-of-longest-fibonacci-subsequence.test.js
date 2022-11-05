import { lengthOfLongestFibonacciSubsequence } from './length-of-longest-fibonacci-subsequence';
describe('[Leetcode] length-of-longest-fibonacci-subsequence', () => {
	test('example #1', () => {
	expect(
		lengthOfLongestFibonacciSubsequence([1,2,3,4,5,6,7,8])
	).toBe(5);
	});

	test('example #2', () => {
	expect(
		lengthOfLongestFibonacciSubsequence([1,3,7,11,12,14,18])
	).toBe(3);
	});
});