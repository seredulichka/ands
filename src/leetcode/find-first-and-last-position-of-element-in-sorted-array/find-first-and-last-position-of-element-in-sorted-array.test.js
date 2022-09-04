import { findFirstAndLastPositionOfElementInSortedArray } from './find-first-and-last-position-of-element-in-sorted-array';
describe('[Leetcode] find-first-and-last-position-of-element-in-sorted-array', () => {
	test('example #1', () => {
	expect(
		findFirstAndLastPositionOfElementInSortedArray([5,7,7,8,8,10], 8)
	).toStrictEqual([3,4]);
	});

	test('example #2', () => {
	expect(
		findFirstAndLastPositionOfElementInSortedArray([5,7,7,8,8,10], 6)
	).toStrictEqual([-1,-1]);
	});

	test('example #3', () => {
	expect(
		findFirstAndLastPositionOfElementInSortedArray([1], 1)
	).toStrictEqual([0,0]);
	});
});