import { longestContinuousIncreasingSubsequence } from './longest-continuous-increasing-subsequence';
describe('[Leetcode] longest-continuous-increasing-subsequence', () => {
	test('example #1', () => {
	expect(
		longestContinuousIncreasingSubsequence(
			[1,3,5,4,2,3,4,5])
	).toBe(4);
	});

	test('example #2', () => {
	expect(
		longestContinuousIncreasingSubsequence([1,3,5,7])
	).toBe(4);
	});
});