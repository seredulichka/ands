import { climbingStairs } from './climbing-stairs';
describe('[Leetcode] climbing-stairs', () => {
	test('example #1', () => {
	expect(
		climbingStairs(2)
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		climbingStairs(3)
	).toBe(3);
	});
});