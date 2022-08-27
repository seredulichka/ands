import { checkIfNumberHasEqualDigitCountAndDigitValue } from './check-if-number-has-equal-digit-count-and-digit-value';
describe('[Leetcode] check-if-number-has-equal-digit-count-and-digit-value', () => {
	test('example #1', () => {
	expect(
		checkIfNumberHasEqualDigitCountAndDigitValue("1210")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		checkIfNumberHasEqualDigitCountAndDigitValue("030")
	).toBe(false);
	});
});