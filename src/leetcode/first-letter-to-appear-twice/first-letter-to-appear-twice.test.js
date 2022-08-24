import { firstLetterToAppearTwice } from './first-letter-to-appear-twice';
describe('[Leetcode] first-letter-to-appear-twice', () => {
	test('example #1', () => {
	expect(
		firstLetterToAppearTwice("abccbaacz")
	).toBe("c");
	});

	test('example #2', () => {
	expect(
		firstLetterToAppearTwice("abcdd")
	).toBe("d");
	});

	test('example #3', () => {
	expect(
		firstLetterToAppearTwice("eesll")
	).toBe("e");
	});
});