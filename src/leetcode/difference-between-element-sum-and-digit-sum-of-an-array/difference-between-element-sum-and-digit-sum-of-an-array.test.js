import { differenceBetweenElementSumAndDigitSumOfAnArray } from './difference-between-element-sum-and-digit-sum-of-an-array';
describe('[Leetcode] difference-between-element-sum-and-digit-sum-of-an-array', () => {
	test('example #1', () => {
	expect(
		differenceBetweenElementSumAndDigitSumOfAnArray([1,15,6,3])
	).toBe(9);
	});

	test('example #2', () => {
	expect(
		differenceBetweenElementSumAndDigitSumOfAnArray([1,2,3,4])
	).toBe(0);
	});
});