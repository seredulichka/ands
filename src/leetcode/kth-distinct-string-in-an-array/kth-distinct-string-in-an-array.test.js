import { kthDistinctStringInAnArray } from './kth-distinct-string-in-an-array';
describe('[Leetcode] kth-distinct-string-in-an-array', () => {
	test('example #1', () => {
	expect(
		kthDistinctStringInAnArray(["d","b","c","b","c","a"], 2)
	).toBe("a");
	});

	test('example #2', () => {
	expect(
		kthDistinctStringInAnArray(["aaa","aa","a"], 1)
	).toBe("aaa");
	});
});