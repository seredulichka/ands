import { aNumberAfterADoubleReversal } from './a-number-after-a-double-reversal';
describe('[Leetcode] a-number-after-a-double-reversal', () => {
	test('example #1', () => {
	expect(
		aNumberAfterADoubleReversal(526)
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		aNumberAfterADoubleReversal(1800)
	).toBe(false);
	});

	test('example #3', () => {
	expect(
		aNumberAfterADoubleReversal(0)
	).toBe(true);
	});
});