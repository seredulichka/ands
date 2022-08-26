import { generateAStringWithCharactersThatHaveOddCounts } from './generate-a-string-with-characters-that-have-odd-counts';
describe('[Leetcode] generate-a-string-with-characters-that-have-odd-counts', () => {
	test('example #1', () => {
	expect(
		generateAStringWithCharactersThatHaveOddCounts(4)
	).toBe("baaa");
	});

	test('example #2', () => {
	expect(
		generateAStringWithCharactersThatHaveOddCounts(2)
	).toBe("ba");
	});
});