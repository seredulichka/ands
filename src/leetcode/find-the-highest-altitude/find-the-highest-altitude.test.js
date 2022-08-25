import { findTheHighestAltitude } from './find-the-highest-altitude';
describe('[Leetcode] find-the-highest-altitude', () => {
	test('example #1', () => {
	expect(
		findTheHighestAltitude([-5,1,5,0,-7])
	).toBe(1);
	});

	test('example #2', () => {
	expect(
		findTheHighestAltitude([-4,-3,-2,-1,4,3,2])
	).toBe(0);
	});
});