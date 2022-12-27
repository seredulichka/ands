import { maximumValueOfAStringInAnArray } from './maximum-value-of-a-string-in-an-array';
describe('[Leetcode] maximum-value-of-a-string-in-an-array', () => {
	test('example #1', () => {
	expect(
		maximumValueOfAStringInAnArray(["alic3","bob","3","4","00000"])
	).toBe(5);
	});

	test('example #2', () => {
	expect(
		maximumValueOfAStringInAnArray(["1","01","001","0001"])
	).toBe(1);
	});
});