import { maximumNestingDepthOfTheParentheses } from './maximum-nesting-depth-of-the-parentheses';
describe('[Leetcode] maximum-nesting-depth-of-the-parentheses', () => {
	test('example #1', () => {
	expect(
		maximumNestingDepthOfTheParentheses("(1+(2*3)+((8)/4))+1")
	).toBe(3);
	});
	

	test('example #2', () => {
	expect(
		maximumNestingDepthOfTheParentheses("(1)+((2))+(((3)))")
	).toBe(3);
	});
});