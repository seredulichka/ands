import { perfectNumber } from './perfect-number';
describe('[Leetcode] perfect-number', () => {
	test('example #1', () => {
	expect(
		perfectNumber(28)
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		perfectNumber(7)
	).toBe(false);
	});

	test('example #2', () => {
	expect(
		perfectNumber(1874)
	).toBe(false);
	});
});