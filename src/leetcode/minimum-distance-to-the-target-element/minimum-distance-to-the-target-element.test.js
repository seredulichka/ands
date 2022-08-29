import { minimumDistanceToTheTargetElement } from './minimum-distance-to-the-target-element';
describe('[Leetcode] minimum-distance-to-the-target-element', () => {
	test('example #1', () => {
	expect(
		minimumDistanceToTheTargetElement([1,2,3,4,5], 5, 3)
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		minimumDistanceToTheTargetElement([1], 1, 0)
	).toBe(0);
	});
});