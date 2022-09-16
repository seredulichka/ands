import { findCenterOfStarGraph } from './find-center-of-star-graph';
describe('[Leetcode] find-center-of-star-graph', () => {
	test('example #1', () => {
	expect(
		findCenterOfStarGraph([[1,2],[2,3],[4,2]])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		findCenterOfStarGraph([[1,2],[5,1],[1,3],[1,4]])
	).toBe(1);
	});
});