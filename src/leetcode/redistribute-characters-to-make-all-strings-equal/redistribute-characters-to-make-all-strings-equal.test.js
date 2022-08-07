import { redistributeCharactersToMakeAllStringsEqual } from './redistribute-characters-to-make-all-strings-equal';
describe('[Leetcode] redistribute-characters-to-make-all-strings-equal', () => {
	test('example #1', () => {
	expect(
		redistributeCharactersToMakeAllStringsEqual(["abc","aabc","bc"])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		redistributeCharactersToMakeAllStringsEqual(["ab","a"])
	).toBe(false);
	});
});