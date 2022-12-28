import { countVowelSubstringsOfAString } from './count-vowel-substrings-of-a-string';
describe('[Leetcode] count-vowel-substrings-of-a-string', () => {
	test('example #1', () => {
	expect(
		countVowelSubstringsOfAString("aeiouu")
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		countVowelSubstringsOfAString("unicornarihan")
	).toBe(0);
	});

	test('example #3', () => {
	expect(
		countVowelSubstringsOfAString("cuaieuouac")
	).toBe(7);
	});
});