import { indTargetIndicesAfterSortingArray } from './ind-target-indices-after-sorting-array';
describe('[Leetcode] ind-target-indices-after-sorting-array', () => {
	test('example #1', () => {
	expect(
		indTargetIndicesAfterSortingArray([1,2,5,2,3], 2)
	).toStrictEqual([1,2]);
	});

	test('example #2', () => {
	expect(
		indTargetIndicesAfterSortingArray([1,2,5,2,3], 3)
	).toStrictEqual([3]);
	});

	test('example #3', () => {
	expect(
		indTargetIndicesAfterSortingArray([1,2,5,2,3], 5)
	).toStrictEqual([4]);
	});
});