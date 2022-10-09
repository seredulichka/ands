import { theKWeakestRowsInAMatrix } from './the-k-weakest-rows-in-a-matrix';
describe('[Leetcode] the-k-weakest-rows-in-a-matrix', () => {
	test('example #1', () => {
	expect(
		theKWeakestRowsInAMatrix([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3)
	).toStrictEqual([2,0,3]);
	});

	test('example #2', () => {
	expect(
		theKWeakestRowsInAMatrix([[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], 2)
	).toStrictEqual([0,2]);
	});
});