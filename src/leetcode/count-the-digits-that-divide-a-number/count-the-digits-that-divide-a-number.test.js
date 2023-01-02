import { countTheDigitsThatDivideANumber } from './count-the-digits-that-divide-a-number';
describe('[Leetcode] count-the-digits-that-divide-a-number', () => {
	test('example #1', () => {
	expect(
		countTheDigitsThatDivideANumber(7)
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		countTheDigitsThatDivideANumber(121)
	).toBe(2);
	});

	test('example #3', () => {
	expect(
		countTheDigitsThatDivideANumber(1248)
	).toBe(4);
	});
});