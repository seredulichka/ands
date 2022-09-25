import { containsDuplicate } from './contains-duplicate';
describe('[Leetcode] contains-duplicate', () => {
	test('example #1', () => {
	expect(
		containsDuplicate([1,2,3,1])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		containsDuplicate([1,2,3,4])
	).toBe(false);
	});

	test('example #3', () => {
	expect(
		containsDuplicate([1,1,1,3,3,4,3,2,4,2])
	).toBe(true);
	});
});