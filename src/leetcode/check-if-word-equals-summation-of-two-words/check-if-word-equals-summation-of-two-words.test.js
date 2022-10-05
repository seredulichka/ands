import { checkIfWordEqualsSummationOfTwoWords } from './check-if-word-equals-summation-of-two-words';
describe('[Leetcode] check-if-word-equals-summation-of-two-words', () => {
	test('example #1', () => {
	expect(
		checkIfWordEqualsSummationOfTwoWords("acb", "cba", "cdb")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		checkIfWordEqualsSummationOfTwoWords("aaa", "a", "aab")
	).toBe(false);
	});

	test('example #3', () => {
	expect(
		checkIfWordEqualsSummationOfTwoWords("aaa", "a", "aaaa")
	).toBe(true);
	});
});