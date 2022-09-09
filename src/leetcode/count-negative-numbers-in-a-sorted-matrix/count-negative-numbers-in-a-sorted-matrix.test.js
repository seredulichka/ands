import { countNegativeNumbersInASortedMatrix } from './count-negative-numbers-in-a-sorted-matrix';
describe('[Leetcode] count-negative-numbers-in-a-sorted-matrix', () => {
	test('example #1', () => {
	expect(
		countNegativeNumbersInASortedMatrix([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
	).toBe(8);
	});

	test('example #2', () => {
	expect(
		countNegativeNumbersInASortedMatrix([[3,2],[1,0]])
	).toBe(0);
	});
});