import { uniqueNumberOfOccurrences } from './unique-number-of-occurrences';
describe('[Leetcode] unique-number-of-occurrences', () => {
	test('example #1', () => {
	expect(
		uniqueNumberOfOccurrences([1,2,2,1,1,3])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		uniqueNumberOfOccurrences([1,2])
	).toBe(false);
	});

	test('example #3', () => {
	expect(
		uniqueNumberOfOccurrences([-3,0,1,-3,1,1,1,-3,10,0])
	).toBe(true);
	});
});