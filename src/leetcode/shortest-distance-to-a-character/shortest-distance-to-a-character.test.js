import { shortestDistanceToACharacter } from './shortest-distance-to-a-character';
describe('[Leetcode] shortest-distance-to-a-character', () => {
	test('example #1', () => {
	expect(
		shortestDistanceToACharacter("loveleetcode", "e")
	).toStrictEqual([3,2,1,0,1,0,0,1,2,2,1,0]);
	});

	test('example #2', () => {
	expect(
		shortestDistanceToACharacter("aaab", "b")
	).toStrictEqual([3,2,1,0]);
	});
});