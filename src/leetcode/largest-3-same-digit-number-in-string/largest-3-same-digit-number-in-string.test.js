import { largest3SameDigitNumberInString } from './largest-3-same-digit-number-in-string';
describe('[Leetcode] largest-3-same-digit-number-in-string', () => {
	test('example #1', () => {
	expect(
		largest3SameDigitNumberInString("6777133339")
	).toBe("777");
	});

	test('example #2', () => {
	expect(
		largest3SameDigitNumberInString("2300019")
	).toBe("000");
	});

	test('example #3', () => {
	expect(
		largest3SameDigitNumberInString("42352338")
	).toBe("");
	});
});