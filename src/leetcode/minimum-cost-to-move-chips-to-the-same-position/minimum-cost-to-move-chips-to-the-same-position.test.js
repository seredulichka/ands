import { minimumCostToMoveChipsToTheSamePosition } from './minimum-cost-to-move-chips-to-the-same-position';
describe('[Leetcode] minimum-cost-to-move-chips-to-the-same-position', () => {
	test('example #1', () => {
	expect(
		minimumCostToMoveChipsToTheSamePosition([1,2,3])
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		minimumCostToMoveChipsToTheSamePosition([2,2,2,3,3])
	).toBe(2);
	});

	test('example #3', () => {
	expect(
		minimumCostToMoveChipsToTheSamePosition([1,1000000000])
	).toBe(1);
	});
});