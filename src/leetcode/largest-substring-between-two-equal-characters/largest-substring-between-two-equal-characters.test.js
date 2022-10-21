import { largestSubstringBetweenTwoEqualCharacters } from './largest-substring-between-two-equal-characters';
describe('[Leetcode] largest-substring-between-two-equal-characters', () => {
	test('example #1', () => {
	expect(
		largestSubstringBetweenTwoEqualCharacters("aa")
	).toBe(0);
	});

	test('example #2', () => {
	expect(
		largestSubstringBetweenTwoEqualCharacters("abca")
	).toBe(2);
	});

	test('example #3', () => {
	expect(
		largestSubstringBetweenTwoEqualCharacters("cbzxy")
	).toBe(-1);
	});
});