import { bestTimeToBuyAndSellStock } from './best-time-to-buy-and-sell-stock';
describe('[Leetcode] best-time-to-buy-and-sell-stock', () => {
	test('example #1', () => {
	expect(
		bestTimeToBuyAndSellStock([7,1,5,3,6,4])
	).toBe(5);
	});

	test('example #2', () => {
	expect(
		bestTimeToBuyAndSellStock([7,6,4,3,1])
	).toBe(0);
	});
});