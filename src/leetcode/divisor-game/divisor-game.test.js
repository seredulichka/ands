import { divisorGame } from './divisor-game';
describe('[Leetcode] divisor-game', () => {
	test('example #1', () => {
	expect(
		divisorGame(2)
	).toBe(true);
	});

	test('example #2', () => {
	expect(
		divisorGame(3)
	).toBe(false);
	});
});