import { uncommonWordsFromTwoSentences } from './uncommon-words-from-two-sentences';
describe('[Leetcode] uncommon-words-from-two-sentences', () => {
	test('example #1', () => {
	expect(
		uncommonWordsFromTwoSentences("this apple is sweet", "this apple is sour")
	).toStrictEqual(["sweet","sour"]);
	});

	test('example #2', () => {
	expect(
		uncommonWordsFromTwoSentences("apple apple", "banana")
	).toStrictEqual(["banana"]);
	});
});