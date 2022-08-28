import { longestSubsequenceWithLimitedSum } from './longest-subsequence-with-limited-sum';
describe('[Leetcode] longest-subsequence-with-limited-sum', () => {
	test('example #1', () => {
	expect(
		longestSubsequenceWithLimitedSum([4,5,2,1], [3,10,21])
	).toStrictEqual([2,3,4]);
	});

	test('example #2', () => {
	expect(
		longestSubsequenceWithLimitedSum([2,3,4,5], [1])
	).toStrictEqual([0]);
	});
});