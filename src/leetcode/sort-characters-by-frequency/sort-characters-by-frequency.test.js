import { sortCharactersByFrequency } from './sort-characters-by-frequency';
describe('[Leetcode] sort-characters-by-frequency', () => {
	test('example #1', () => {
	expect(
		sortCharactersByFrequency("tree")
	).toBe("eetr");
	});

	test('example #2', () => {
	expect(
		sortCharactersByFrequency("cccaaa")
	).toBe("cccaaa");
	});
});