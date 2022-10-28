import { findCommonCharacters } from './find-common-characters';
describe('[Leetcode] find-common-characters', () => {
	test('example #1', () => {
	expect(
		findCommonCharacters(["bella","label","roller"])
	).toStrictEqual(["e","l","l"]);
	});

	test('example #2', () => {
	expect(
		findCommonCharacters(["cool","lock","cook"])
	).toStrictEqual(["c","o"]);
	});
});