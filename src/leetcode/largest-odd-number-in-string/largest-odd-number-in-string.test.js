import { largestOddNumberInString } from './largest-odd-number-in-string';
describe('[Leetcode] largest-odd-number-in-string', () => {
	test('example #1', () => {
	expect(
		largestOddNumberInString("52")
	).toBe("5");
	});

	test('example #2', () => {
	expect(
		largestOddNumberInString("4206")
	).toBe("");
	});

	test('example #3', () => {
	expect(
		largestOddNumberInString("35427")
	).toBe("35427");
	});
});