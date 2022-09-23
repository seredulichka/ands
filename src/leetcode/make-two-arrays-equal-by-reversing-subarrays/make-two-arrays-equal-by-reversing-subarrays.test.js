import { makeTwoArraysEqualByReversingSubarrays } from './make-two-arrays-equal-by-reversing-subarrays';
describe('[Leetcode] make-two-arrays-equal-by-reversing-subarrays', () => {
	test('example #1', () => {
	expect(
		makeTwoArraysEqualByReversingSubarrays([1,2,3,4], [2,4,1,3])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		makeTwoArraysEqualByReversingSubarrays([7], [7])
	).toBe(true);
	});

	test('example #3', () => {
	expect(
		makeTwoArraysEqualByReversingSubarrays([3,7,9], [3,7,11])
	).toBe(false);
	});
});