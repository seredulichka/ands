import { sumOfAllOddLengthSubarrays } from './sum-of-all-odd-length-subarrays';
describe('[Leetcode] sum-of-all-odd-length-subarrays', () => {
	test('example #1', () => {
	expect(
		sumOfAllOddLengthSubarrays([1,4,2,5,3])
	).toBe(58);
	});

	test('example #2', () => {
	expect(
		sumOfAllOddLengthSubarrays([1,2])
	).toBe(3);
	});

	test('example #3', () => {
	expect(
		sumOfAllOddLengthSubarrays([10,11,12])
	).toBe(66);
	});
});