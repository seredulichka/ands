import { sortArrayByIncreasingFrequency } from './sort-array-by-increasing-frequency';
describe('[Leetcode] sort-array-by-increasing-frequency', () => {
	test('example #1', () => {
	expect(
		sortArrayByIncreasingFrequency([1,1,2,2,2,3])
	).toStrictEqual([3,1,1,2,2,2]);
	});

	test('example #2', () => {
	expect(
		sortArrayByIncreasingFrequency([2,3,1,3,2])
	).toStrictEqual([1,3,3,2,2]);
	});

	test('example #3', () => {
	expect(
		sortArrayByIncreasingFrequency([-1,1,-6,4,5,-6,1,4,1])
	).toStrictEqual([5,-1,4,4,-6,-6,1,1,1]);
	});
});