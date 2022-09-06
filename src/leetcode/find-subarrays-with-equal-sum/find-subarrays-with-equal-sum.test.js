import { findSubarraysWithEqualSum } from './find-subarrays-with-equal-sum';
describe('[Leetcode] find-subarrays-with-equal-sum', () => {
	test('example #1', () => {
	expect(
		findSubarraysWithEqualSum([4,2,4])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		findSubarraysWithEqualSum([1,2,3,4,5])
	).toBe(false);
	});
	
	test('example #3', () => {
	expect(
		findSubarraysWithEqualSum([0,0,0])
	).toBe(true);
	});

	test('example #4', () => {
	expect(
		findSubarraysWithEqualSum([0,0])
	).toBe(false);
	});
});