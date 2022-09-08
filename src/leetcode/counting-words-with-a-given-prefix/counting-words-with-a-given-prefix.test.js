import { countingWordsWithAGivenPrefix } from './counting-words-with-a-given-prefix';
describe('[Leetcode] counting-words-with-a-given-prefix', () => {
	test('example #1', () => {
	expect(
		countingWordsWithAGivenPrefix(["pay","attention","practice","attend"], "at")
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		countingWordsWithAGivenPrefix(["leetcode","win","loops","success"], "code")
	).toBe(0);
	});
});