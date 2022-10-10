import { countHillsAndValleysInAnArray } from './count-hills-and-valleys-in-an-array';
describe('[Leetcode] count-hills-and-valleys-in-an-array', () => {
	test('example #1', () => {
	expect(
		countHillsAndValleysInAnArray([5,7,7,1,7])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		countHillsAndValleysInAnArray([6,6,5,5,4,1])
	).toBe(0);
	});
});