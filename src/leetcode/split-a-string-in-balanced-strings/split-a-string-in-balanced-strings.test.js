import { splitAStringInBalancedStrings } from './split-a-string-in-balanced-strings';
describe('[Leetcode] split-a-string-in-balanced-strings', () => {
	test('example #1', () => {
	expect(
		splitAStringInBalancedStrings("RLRRLLRLRL")
	).toBe(4);
	});

	test('example #2', () => {
	expect(
		splitAStringInBalancedStrings("RLRRRLLRLL")
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		splitAStringInBalancedStrings("LLLLRRRR")
	).toBe(1);
	});
});