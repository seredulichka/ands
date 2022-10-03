import { countPrimes } from './count-primes';
describe('[Leetcode] count-primes', () => {
	test('example #1', () => {
	expect(
		countPrimes(10)
	).toBe(4);
	});

	test('example #2', () => {
	expect(
		countPrimes(0)
	).toBe(0);
	});

	test('example #3', () => {
	expect(
		countPrimes(1)
	).toBe(0);
	});

	test('example #4', () => {
	expect(
		countPrimes(4999)
	).toBe(668);
	});
});