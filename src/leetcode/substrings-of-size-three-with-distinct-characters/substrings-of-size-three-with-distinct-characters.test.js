import { substringsOfSizeThreeWithDistinctCharacters } from './substrings-of-size-three-with-distinct-characters';
describe('[Leetcode] substrings-of-size-three-with-distinct-characters', () => {
	test('example #1', () => {
	expect(
		substringsOfSizeThreeWithDistinctCharacters("xyzzaz")
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		substringsOfSizeThreeWithDistinctCharacters("aababcabc")
	).toBe(4);
	});
});