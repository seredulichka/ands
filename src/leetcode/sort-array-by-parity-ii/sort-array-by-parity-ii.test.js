import { sortArrayByParityIi } from './sort-array-by-parity-ii';
describe('[Leetcode] sort-array-by-parity-ii', () => {
	test('example #1', () => {
	expect(
		sortArrayByParityIi([4,2,5,7])
	).toStrictEqual([4,5,2,7]);
	});

	test('example #2', () => {
	expect(
		sortArrayByParityIi([2,3])
	).toStrictEqual([2,3]);
	});
});