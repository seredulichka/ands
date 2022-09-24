import { divideArrayIntoEqualPairs } from './divide-array-into-equal-pairs';
describe('[Leetcode] divide-array-into-equal-pairs', () => {
	test('example #1', () => {
	expect(
		divideArrayIntoEqualPairs([3,2,3,2,2,2])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		divideArrayIntoEqualPairs([1,2,3,4])
	).toBe(false);
	});
});