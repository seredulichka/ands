import { checkIfStringIsAPrefixOfArray } from './check-if-string-is-a-prefix-of-array';
describe('[Leetcode] check-if-string-is-a-prefix-of-array', () => {
	test('example #1', () => {
	expect(
		checkIfStringIsAPrefixOfArray("iloveleetcode", ["i","love","leetcode","apples"])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		checkIfStringIsAPrefixOfArray("iloveleetcode", ["apples","i","love","leetcode"])
	).toBe(false);
	});
});