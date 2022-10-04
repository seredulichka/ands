import { findNUniqueIntegersSumUpToZero } from './find-n-unique-integers-sum-up-to-zero';
describe('[Leetcode] find-n-unique-integers-sum-up-to-zero', () => {
	test('example #1', () => {
	expect(
		findNUniqueIntegersSumUpToZero(5)
	).toStrictEqual([1,-1,2,-2,0]);
	});

	test('example #2', () => {
	expect(
		findNUniqueIntegersSumUpToZero(6)
	).toStrictEqual([1,-1,2,-2,3,-3]);
	});
});