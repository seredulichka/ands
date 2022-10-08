import { determineColorOfAChessboardSquare } from './determine-color-of-a-chessboard-square';
describe('[Leetcode] determine-color-of-a-chessboard-square', () => {
	test('example #1', () => {
	expect(
		determineColorOfAChessboardSquare("a1")
	).toBe(false);
	});

	test('example #2', () => {
	expect(
		determineColorOfAChessboardSquare("h3")
	).toBe(true);
	});

	test('example #3', () => {
	expect(
		determineColorOfAChessboardSquare("c7")
	).toBe(false);
	});
});