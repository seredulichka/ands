import { determineIfStringHalvesAreAlike } from './determine-if-string-halves-are-alike';
describe('[Leetcode] determine-if-string-halves-are-alike', () => {
	test('example #1', () => {
	expect(
		determineIfStringHalvesAreAlike("book")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		determineIfStringHalvesAreAlike("textbook")
	).toBe(false);
	});
});