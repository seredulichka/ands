import { checkIfArrayIsSortedAndRotated } from './check-if-array-is-sorted-and-rotated';
describe('[Leetcode] check-if-array-is-sorted-and-rotated', () => {
	test('example #1', () => {
	expect(
		checkIfArrayIsSortedAndRotated([3,4,5,1,2])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		checkIfArrayIsSortedAndRotated([2,1,3,4])
	).toBe(false);
	});

	test('example #3', () => {
	expect(
		checkIfArrayIsSortedAndRotated([1,2,3])
	).toBe(true);
	});
});