import { checkDistancesBetweenSameLetters } from './check-distances-between-same-letters';
describe('[Leetcode] check-distances-between-same-letters', () => {
	test('example #1', () => {
	expect(
		checkDistancesBetweenSameLetters("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		checkDistancesBetweenSameLetters("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
	).toBe(false);
	});
});