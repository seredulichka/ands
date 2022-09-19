import { minimumTimeVisitingAllPoints } from './minimum-time-visiting-all-points';
describe('[Leetcode] minimum-time-visiting-all-points', () => {
	test('example #1', () => {
	expect(
		minimumTimeVisitingAllPoints([[1,1],[3,4],[-1,0]])
	).toBe(7);
	});

	test('example #2', () => {
	expect(
		minimumTimeVisitingAllPoints([[3,2],[-2,2]])
	).toBe(5);
	});
});