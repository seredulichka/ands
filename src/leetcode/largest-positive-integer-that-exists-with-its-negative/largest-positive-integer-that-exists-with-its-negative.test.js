import { largestPositiveIntegerThatExistsWithItsNegative } from './largest-positive-integer-that-exists-with-its-negative';
describe('[Leetcode] largest-positive-integer-that-exists-with-its-negative', () => {
	test('example #1', () => {
	expect(
		largestPositiveIntegerThatExistsWithItsNegative([-1,2,-3,3])
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		largestPositiveIntegerThatExistsWithItsNegative([-1,10,6,7,-7,1])
	).toBe(7);
	});

	test('example #3', () => {
	expect(
		largestPositiveIntegerThatExistsWithItsNegative([-10,8,6,7,-2,-3])
	).toBe(-1);
	});
});