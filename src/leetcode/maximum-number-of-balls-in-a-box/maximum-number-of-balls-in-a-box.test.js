import { maximumNumberOfBallsInABox } from './maximum-number-of-balls-in-a-box';
describe('[Leetcode] maximum-number-of-balls-in-a-box', () => {
	test('example #1', () => {
	expect(
		maximumNumberOfBallsInABox(1, 10)
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		maximumNumberOfBallsInABox(5, 15)
	).toBe(2);
	});

	test('example #2', () => {
	expect(
		maximumNumberOfBallsInABox(19, 28)
	).toBe(2);
	});
});