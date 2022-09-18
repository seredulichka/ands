import { smallestEvenMultiple } from './smallest-even-multiple';
describe('[Leetcode] smallest-even-multiple', () => {
	test('example #1', () => {
	expect(
		smallestEvenMultiple(5)
	).toBe(10);
	});

	test('example #2', () => {
	expect(
		smallestEvenMultiple(6)
	).toBe(6);
	});
});