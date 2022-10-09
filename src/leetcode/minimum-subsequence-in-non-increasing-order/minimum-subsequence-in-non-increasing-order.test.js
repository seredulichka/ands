import { minimumSubsequenceInNonIncreasingOrder } from './minimum-subsequence-in-non-increasing-order';
describe('[Leetcode] minimum-subsequence-in-non-increasing-order', () => {
	test('example #1', () => {
	expect(
		minimumSubsequenceInNonIncreasingOrder([4,3,10,9,8])
	).toStrictEqual([10,9]);
	});

	test('example #2', () => {
	expect(
		minimumSubsequenceInNonIncreasingOrder([4,4,7,6,7])
	).toStrictEqual([7,7,6]);
	});
});