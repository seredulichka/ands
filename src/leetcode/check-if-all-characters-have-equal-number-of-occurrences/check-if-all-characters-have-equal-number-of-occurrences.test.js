import { checkIfAllCharactersHaveEqualNumberOfOccurrences } from './check-if-all-characters-have-equal-number-of-occurrences';
describe('[Leetcode] check-if-all-characters-have-equal-number-of-occurrences', () => {
	test('example #1', () => {
	expect(
		checkIfAllCharactersHaveEqualNumberOfOccurrences("abacbc")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		checkIfAllCharactersHaveEqualNumberOfOccurrences("aaabb")
	).toBe(false);
	});
});