import { sortArrayByParity } from './sort-array-by-parity';
describe('[Leetcode] sort-array-by-parity', () => {
	test('example #1', () => {
	expect(
		sortArrayByParity([3,1,2,4])
	).toStrictEqual([2,4,3,1]);
	});

	test('example #2', () => {
	expect(
		sortArrayByParity([0])
	).toStrictEqual([0]);
	});
});