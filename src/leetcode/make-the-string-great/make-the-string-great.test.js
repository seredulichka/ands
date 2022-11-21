import { makeTheStringGreat } from './make-the-string-great';
describe('[Leetcode] make-the-string-great', () => {
	test('example #1', () => {
	expect(
		makeTheStringGreat("leEeetcode")
	).toBe("leetcode");
	});

	test('example #2', () => {
	expect(
		makeTheStringGreat("abBAcC")
	).toBe("");
	});
});