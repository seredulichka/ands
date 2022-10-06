import { checkIfAllAsAppearsBeforeAllBs } from './check-if-all-as-appears-before-all-bs';
describe('[Leetcode] check-if-all-as-appears-before-all-bs', () => {
	test('example #1', () => {
	expect(
		checkIfAllAsAppearsBeforeAllBs("aaabbb")
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		checkIfAllAsAppearsBeforeAllBs("abab")
	).toBe(false);
	});

	test('example #3', () => {
	expect(
		checkIfAllAsAppearsBeforeAllBs("bbb")
	).toBe(true);
	});
});