import { checkIfAWordOccursAsAPrefixOfAnyWordInASentence } from './check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence';
describe('[Leetcode] check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence', () => {
	test('example #1', () => {
	expect(
		checkIfAWordOccursAsAPrefixOfAnyWordInASentence("i love eating burger", "burg")
	).toBe(4);
	});
	
	test('example #2', () => {
	expect(
		checkIfAWordOccursAsAPrefixOfAnyWordInASentence("this problem is an easy problem", "pro")
	).toBe(2);
	});

	test('example #3', () => {
	expect(
		checkIfAWordOccursAsAPrefixOfAnyWordInASentence("i am tired", "you")
	).toBe(-1);
	});
});