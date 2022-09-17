import { matrixDiagonalSum } from './matrix-diagonal-sum';
describe('[Leetcode] matrix-diagonal-sum', () => {
	test('example #1', () => {
	expect(
		matrixDiagonalSum([[1,2,3],[4,5,6],[7,8,9]])
	).toBe(25);
	});

	test('example #2', () => {
	expect(
		matrixDiagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])
	).toBe(8);
	});

	test('example #3', () => {
	expect(
		matrixDiagonalSum([[5]])
	).toBe(5);
	});
});