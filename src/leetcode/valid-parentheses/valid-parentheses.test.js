import { validParentheses } from './valid-parentheses';
describe('[Leetcode] valid-parentheses', () => {
	test('example #1', () => {
	expect(
		validParentheses("()")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		validParentheses("()[]{}")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		validParentheses("(]")
	).toBe(false);
	});
});