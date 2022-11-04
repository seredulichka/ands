import { nThTribonacciNumber } from './n-th-tribonacci-number';
describe('[Leetcode] n-th-tribonacci-number', () => {
	test('example #1', () => {
	expect(
		nThTribonacciNumber(4)
	).toBe(4);
	});

	test('example #2', () => {
	expect(
		nThTribonacciNumber(25)
	).toBe(1389537);
	});
});