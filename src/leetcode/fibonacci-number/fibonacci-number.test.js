import { fibonacciNumber } from './fibonacci-number';
describe('[Leetcode] fibonacci-number', () => {
	test('example #1', () => {
	expect(
		fibonacciNumber(2)
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		fibonacciNumber(3)
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		fibonacciNumber(4)
	).toBe(3);
	});
});