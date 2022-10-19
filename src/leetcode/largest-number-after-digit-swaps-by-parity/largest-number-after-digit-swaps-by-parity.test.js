import { LargestNumberAfterDigitSwapsByParity } from './largest-number-after-digit-swaps-by-parity';
describe('[Leetcode] largest-number-after-digit-swaps-by-parity', () => {
	test('example #1', () => {
	expect(
		LargestNumberAfterDigitSwapsByParity(1234)
	).toBe(3412);
	});

	test('example #2', () => {
	expect(
		LargestNumberAfterDigitSwapsByParity(65875)
	).toBe(87655);
	});

	test('example #3', () => {
	expect(
		LargestNumberAfterDigitSwapsByParity(247)
	).toBe(427);
	});
});