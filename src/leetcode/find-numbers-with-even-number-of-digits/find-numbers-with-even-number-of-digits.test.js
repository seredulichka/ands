import { findNumbersWithEvenNumberOfDigits } from './find-numbers-with-even-number-of-digits';
describe('[Leetcode] find-numbers-with-even-number-of-digits', () => {
	test('example #1', () => {
	expect(
		findNumbersWithEvenNumberOfDigits([12,345,2,6,7896])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		findNumbersWithEvenNumberOfDigits([555,901,482,1771])
	).toBe(1);
	});
});