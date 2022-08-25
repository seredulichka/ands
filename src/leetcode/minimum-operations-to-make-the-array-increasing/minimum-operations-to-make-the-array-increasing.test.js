import { minimumOperationsToMakeTheArrayIncreasing } from './minimum-operations-to-make-the-array-increasing';
describe('[Leetcode] minimum-operations-to-make-the-array-increasing', () => {
	test('example #1', () => {
	expect(
		minimumOperationsToMakeTheArrayIncreasing([1,1,1])
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		minimumOperationsToMakeTheArrayIncreasing([1,5,2,4,1])
	).toBe(14);
	});

	test('example #3', () => {
	expect(
		minimumOperationsToMakeTheArrayIncreasing([8])
	).toBe(0);
	});
});