import { baseballGame } from './baseball-game';
describe('[Leetcode] baseball-game', () => {
	test('example #1', () => {
	expect(
		baseballGame(["5","2","C","D","+"])
	).toBe(30);
	});

	test('example #2', () => {
	expect(
		baseballGame(["5","-2","4","C","D","9","+","+"])
	).toBe(27);
	});

	test('example #3', () => {
	expect(
		baseballGame(["1","C"])
	).toBe(0);
	});
});