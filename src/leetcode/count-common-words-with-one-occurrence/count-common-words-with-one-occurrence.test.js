import { countCommonWordsWithOneOccurrence } from './count-common-words-with-one-occurrence';
describe('[Leetcode] count-common-words-with-one-occurrence', () => {
	test('example #1', () => {
	expect(
		countCommonWordsWithOneOccurrence(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		countCommonWordsWithOneOccurrence(["b","bb","bbb"], ["a","aa","aaa"])
	).toBe(0);
	});

	test('example #3', () => {
	expect(
		countCommonWordsWithOneOccurrence(["a","ab"], ["a","a","a","ab"])
	).toBe(1);
	});
});