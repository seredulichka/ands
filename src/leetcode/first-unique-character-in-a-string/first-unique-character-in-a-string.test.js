import { firstUniqueCharacterInAString } from './first-unique-character-in-a-string';
describe('[Leetcode] first-unique-character-in-a-string', () => {
	test('example #1', () => {
	expect(
		firstUniqueCharacterInAString("leetcode")
	).toBe(0);
	});

	test('example #2', () => {
	expect(
		firstUniqueCharacterInAString("loveleetcode")
	).toBe(2);
	});

	test('example #3', () => {
	expect(
		firstUniqueCharacterInAString("aabb")
	).toBe(-1);
	});
});