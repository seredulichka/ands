import { removeAllAdjacentDuplicatesInString } from './remove-all-adjacent-duplicates-in-string';
describe('[Leetcode] remove-all-adjacent-duplicates-in-string', () => {
	test('example #1', () => {
	expect(
		removeAllAdjacentDuplicatesInString("abbaca")
	).toBe("ca");
	});

	test('example #2', () => {
	expect(
		removeAllAdjacentDuplicatesInString("azxxzy")
	).toBe("ay");
	});
});