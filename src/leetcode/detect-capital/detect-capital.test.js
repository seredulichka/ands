import { detectCapital } from './detect-capital';
describe('[Leetcode] detect-capital', () => {
	test('example #1', () => {
	expect(
		detectCapital("USA")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		detectCapital("FlaG")
	).toBe(false);
	});
});