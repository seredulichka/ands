import { countPairsOfSimilarStrings } from './count-pairs-of-similar-strings';
describe('[Leetcode] count-pairs-of-similar-strings', () => {
	test('example #1', () => {
	expect(
		countPairsOfSimilarStrings(["aba","aabb","abcd","bac","aabc"])
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		countPairsOfSimilarStrings(["aabb","ab","ba"])
	).toBe(3);
	});

	test('example #3', () => {
	expect(
		countPairsOfSimilarStrings(["nba","cba","dba"])
	).toBe(0);
	});
});