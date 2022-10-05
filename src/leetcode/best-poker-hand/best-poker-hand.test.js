import { bestPokerHand } from './best-poker-hand';
describe('[Leetcode] best-poker-hand', () => {
	test('example #1', () => {
	expect(
		bestPokerHand([13,2,3,1,9], ["a","a","a","a","a"])
	).toBe("Flush");
	});

	test('example #2', () => {
	expect(
		bestPokerHand([4,4,2,4,4], ["d","a","a","b","c"])
	).toBe("Three of a Kind");
	});

	test('example #3', () => {
	expect(
		bestPokerHand([10,10,2,12,9], ["a","b","c","a","d"])
	).toBe("Pair");
	});
});