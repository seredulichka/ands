import { relativeSortArray } from './relative-sort-array';
describe('[Leetcode] relative-sort-array', () => {
	test('example #1', () => {
	expect(
		relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])
	).toStrictEqual([2,2,2,1,4,3,3,9,6,7,19]);
	});

	test('example #2', () => {
	expect(
		relativeSortArray([28,6,22,8,44,17], [22,28,8,6])
	).toStrictEqual([22,28,8,6,17,44]);
	});
});