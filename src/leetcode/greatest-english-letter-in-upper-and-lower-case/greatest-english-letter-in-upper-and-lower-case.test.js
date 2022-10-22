import { greatestEnglishLetterInUpperAndLowerCase } from './greatest-english-letter-in-upper-and-lower-case';
describe('[Leetcode] greatest-english-letter-in-upper-and-lower-case', () => {
	test('example #1', () => {
	expect(
		greatestEnglishLetterInUpperAndLowerCase("lEeTcOdE")
	).toBe("E");
	});

	test('example #2', () => {
	expect(
		greatestEnglishLetterInUpperAndLowerCase("arRAzFif")
	).toBe("R");
	});

	test('example #3', () => {
	expect(
		greatestEnglishLetterInUpperAndLowerCase("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
	).toBe("");
	});
});