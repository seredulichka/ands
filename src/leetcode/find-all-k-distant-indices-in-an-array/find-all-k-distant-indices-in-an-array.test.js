import { findAllKDistantIndicesInAnArray } from './find-all-k-distant-indices-in-an-array';
describe('[Leetcode] find-all-k-distant-indices-in-an-array', () => {
	test('example #1', () => {
	expect(
		findAllKDistantIndicesInAnArray([3,4,9,1,3,9,5], 9, 1)
	).toStrictEqual([1,2,3,4,5,6]);
	});

	test('example #2', () => {
	expect(
		findAllKDistantIndicesInAnArray([2,2,2,2,2], 2, 2)
	).toStrictEqual([0,1,2,3,4]);
	});
});