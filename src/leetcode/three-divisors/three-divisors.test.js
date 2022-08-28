import { threeDivisors } from './three-divisors';
describe('[Leetcode] three-divisors', () => {
	test('example #1', () => {
	expect(
		threeDivisors(2)
	).toBe(false);
	});

	test('example #2', () => {
	expect(
		threeDivisors(4)
	).toBe(true);
	});

	test('example #3', () => {
	expect(
		threeDivisors(12)
	).toBe(false);
	});
});