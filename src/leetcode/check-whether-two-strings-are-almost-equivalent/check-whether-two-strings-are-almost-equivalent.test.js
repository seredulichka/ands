import { checkWhetherTwoStringsAreAlmostEquivalent } from './check-whether-two-strings-are-almost-equivalent';
describe('[Leetcode] check-whether-two-strings-are-almost-equivalent', () => {
	test('example #1', () => {
	expect(
		checkWhetherTwoStringsAreAlmostEquivalent("aaaa", "bccb")
	).toBe(false);
	});

	test('example #2', () => {
	expect(
		checkWhetherTwoStringsAreAlmostEquivalent("abcdeef", "abaaacc")
	).toBe(true);
	});
});