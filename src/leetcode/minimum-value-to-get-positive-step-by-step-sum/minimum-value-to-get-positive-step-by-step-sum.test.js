import { minimumValueToGetPositiveStepByStepSum } from './minimum-value-to-get-positive-step-by-step-sum';
describe('[Leetcode] minimum-value-to-get-positive-step-by-step-sum', () => {
	test('example #1', () => {
	expect(
		minimumValueToGetPositiveStepByStepSum([-3,2,-3,4,2])
	).toBe(5);
	});

	test('example #2', () => {
	expect(
		minimumValueToGetPositiveStepByStepSum([1,2])
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		minimumValueToGetPositiveStepByStepSum([1,-2,-3])
	).toBe(5);
	});
});