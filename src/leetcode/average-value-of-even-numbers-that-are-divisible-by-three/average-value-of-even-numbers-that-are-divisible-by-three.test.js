import { averageValueOfEvenNumbersThatAreDivisibleByThree } from './average-value-of-even-numbers-that-are-divisible-by-three';
describe('[Leetcode] average-value-of-even-numbers-that-are-divisible-by-three', () => {
	test('example #1', () => {
	expect(
		averageValueOfEvenNumbersThatAreDivisibleByThree([1,3,6,10,12,15])
	).toBe(9);
	});

	test('example #2', () => {
	expect(
		averageValueOfEvenNumbersThatAreDivisibleByThree([1,2,4,7,10])
	).toBe(0);
	});
});