import { longestHarmoniousSubsequence } from './longest-harmonious-subsequence';
describe('[Leetcode] longest-harmonious-subsequence', () => {
	test('example #1', () => {
	expect(
		longestHarmoniousSubsequence([1,3,2,2,5,2,3,7])
	).toBe(5);
	});

	test('example #2', () => {
	expect(
		longestHarmoniousSubsequence([1,2,3,4])
	).toBe(2);
	});

	test('example #3', () => {
	expect(
		longestHarmoniousSubsequence([1,1,1,1])
	).toBe(0);
	});
});