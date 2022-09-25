import { makeArrayZeroBySubtractingEqualAmounts } from './make-array-zero-by-subtracting-equal-amounts';
describe('[Leetcode] make-array-zero-by-subtracting-equal-amounts', () => {
	test('example #1', () => {
	expect(
		makeArrayZeroBySubtractingEqualAmounts([1,5,0,3,5])
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		makeArrayZeroBySubtractingEqualAmounts([0])
	).toBe(0);
	});
});