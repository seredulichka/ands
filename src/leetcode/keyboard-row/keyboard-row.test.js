import { keyboardRow } from './keyboard-row';
describe('[Leetcode] keyboard-row', () => {
	test('example #1', () => {
	expect(
		keyboardRow(["Hello","Alaska","Dad","Peace"])
	).toStrictEqual(["Alaska","Dad"]);
	});

	test('example #2', () => {
	expect(
		keyboardRow(["omk"])
	).toStrictEqual([]);
	});

	test('example #2', () => {
	expect(
		keyboardRow(["adsdf","sfd"])
	).toStrictEqual(["adsdf","sfd"]);
	});
});