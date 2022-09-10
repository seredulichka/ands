import { minimumBitFlipsToConvertNumber } from './minimum-bit-flips-to-convert-number';
describe('[Leetcode] minimum-bit-flips-to-convert-number', () => {
	test('example #1', () => {
	expect(
		minimumBitFlipsToConvertNumber(10, 7)
	).toBe(3);
	});

	test('example #2', () => {
	expect(
		minimumBitFlipsToConvertNumber(3, 4)
	).toBe(3);
	});
});