import { numberOfRectanglesThatCanFormTheLargestSquare } from './number-of-rectangles-that-can-form-the-largest-square';
describe('[Leetcode] number-of-rectangles-that-can-form-the-largest-square', () => {
	test('example #1', () => {
	expect(
		numberOfRectanglesThatCanFormTheLargestSquare([[5,8],[3,9],[5,12],[16,5]])
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		numberOfRectanglesThatCanFormTheLargestSquare([[2,3],[3,7],[4,3],[3,7]])
	).toBe(3);
	});
});