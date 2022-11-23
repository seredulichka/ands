import { findWordsThatCanBeFormedByCharacters } from './find-words-that-can-be-formed-by-characters';
describe('[Leetcode] find-words-that-can-be-formed-by-characters', () => {
	test('example #1', () => {
	expect(
		findWordsThatCanBeFormedByCharacters(["cat","bt","hat","tree"], "atach")
	).toBe(6);
	});

	test('example #2', () => {
	expect(
		findWordsThatCanBeFormedByCharacters(["hello","world","leetcode"], "welldonehoneyr")
	).toBe(10);
	});
});