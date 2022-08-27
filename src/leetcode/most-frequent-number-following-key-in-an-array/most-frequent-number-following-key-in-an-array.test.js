import { mostFrequentNumberFollowingKeyInAnArray } from './most-frequent-number-following-key-in-an-array';
describe('[Leetcode] most-frequent-number-following-key-in-an-array', () => {
	test('example #1', () => {
	expect(
		mostFrequentNumberFollowingKeyInAnArray([1,100,200,1,100], 1)
	).toBe(100);
	});

	test('example #2', () => {
	expect(
		mostFrequentNumberFollowingKeyInAnArray([2,2,2,2,3], 2)
	).toBe(2);
	});
});