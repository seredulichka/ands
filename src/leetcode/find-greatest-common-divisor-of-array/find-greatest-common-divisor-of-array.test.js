import { findGreatestCommonDivisorOfArray } from './find-greatest-common-divisor-of-array';
describe('[Leetcode] find-greatest-common-divisor-of-array', () => {
	test('example #1', () => {
	expect(
		findGreatestCommonDivisorOfArray([2,5,6,9,10])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		findGreatestCommonDivisorOfArray([7,5,6,8,3])
	).toBe(1);
	});

	test('example #3', () => {
	expect(
		findGreatestCommonDivisorOfArray([3,3])
	).toBe(3);
	});
});