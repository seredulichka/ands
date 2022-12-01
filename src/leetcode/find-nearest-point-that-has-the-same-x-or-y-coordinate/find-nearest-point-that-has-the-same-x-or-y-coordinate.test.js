import { findNearestPointThatHasTheSameXOrYCoordinate } from './find-nearest-point-that-has-the-same-x-or-y-coordinate';
describe('[Leetcode] find-nearest-point-that-has-the-same-x-or-y-coordinate', () => {
	test('example #1', () => {
	expect(
		findNearestPointThatHasTheSameXOrYCoordinate(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		findNearestPointThatHasTheSameXOrYCoordinate(3, 4, [[3,4]])
	).toBe(0);
	});
});