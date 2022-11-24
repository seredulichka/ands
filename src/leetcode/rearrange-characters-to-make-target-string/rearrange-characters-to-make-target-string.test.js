import { rearrangeCharactersToMakeTargetString } from './rearrange-characters-to-make-target-string';
describe('[Leetcode] rearrange-characters-to-make-target-string', () => {
	test('example #1', () => {
	expect(
		rearrangeCharactersToMakeTargetString("ilovecodingonleetcode", "code")
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		rearrangeCharactersToMakeTargetString("abcba", "abc")
	).toBe(1);
	});
});