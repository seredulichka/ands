import { mergeStringsAlternately } from './merge-strings-alternately';
describe('[Leetcode] merge-strings-alternately', () => {
	test('example #1', () => {
	expect(
		mergeStringsAlternately("abc", "pqr")
	).toBe("apbqcr");
	});
	
	test('example #2', () => {
	expect(
		mergeStringsAlternately("ab", "pqrs")
	).toBe("apbqrs");
	});

	test('example #2', () => {
	expect(
		mergeStringsAlternately("abcd", "pq")
	).toBe("apbqcd");
	});
});