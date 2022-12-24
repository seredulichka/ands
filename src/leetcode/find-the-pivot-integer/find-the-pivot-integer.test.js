import { findThePivotInteger } from './find-the-pivot-integer';
describe('[Leetcode] find-the-pivot-integer', () => {
	test('example #1', () => {
	expect(
		findThePivotInteger(8)
	).toBe(6);
	});

	test('example #2', () => {
	expect(
		findThePivotInteger(1)
	).toBe(1);
	});

	test('example #3', () => {
	expect(
		findThePivotInteger(4)
	).toBe(-1);
	});
});