import { maximumNumberOfWordsYouCanType } from './maximum-number-of-words-you-can-type';
describe('[Leetcode] maximum-number-of-words-you-can-type', () => {
	test('example #1', () => {
	expect(
		maximumNumberOfWordsYouCanType("hello world", "ad")
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		maximumNumberOfWordsYouCanType("leet code", "lt")
	).toBe(1);
	});

	test('example #3', () => {
	expect(
		maximumNumberOfWordsYouCanType("leet code", "e")
	).toBe(0);
	});
});